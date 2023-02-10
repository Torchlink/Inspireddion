export const cleanUrl = (imgUrl) => {
  let encoded = imgUrl.replace("amp;s", "s");
  let doubleEncoded = encoded.replace("amp;", "");
  let tripleEncoded = doubleEncoded.replace("amp;", "");
  let quadEncoded = tripleEncoded.replace("amp;v", "v");
  return quadEncoded;
};

export const checkMediaType = (post) => {
  let mediaType = "";
  if (
    !post.data.is_gallery &&
    !post.data.is_video &&
    post.data.thumbnail !== "" &&
    !post.data.is_self
  ) {
    mediaType = "img";
  } else if (post.data.is_gallery) {
    mediaType = "gallery";
  } else if (post.data.is_video) {
    mediaType = "video";
  } else {
    mediaType = "text";
  }
  return mediaType;
};

export const getMediaContent = (post) => {
  const mediaType = checkMediaType(post);
  const mediaContent = { type: mediaType };
  switch (mediaType) {
    case "img":
      console.log(post);
      const resolutions = post.data.preview.images[0].resolutions;
      mediaContent["src"] = cleanUrl(
        resolutions[resolutions.length -1].url
      );
      mediaContent["height"] =
      resolutions[resolutions.length -1].height;
      mediaContent["width"] = resolutions[resolutions.length -1].width;
      return mediaContent;
    case "gallery":
      mediaContent["gallery_info"] = post.data.media_metadata.map((id) => {
        return {
          src: cleanUrl(id.p[0].u),
          width: id.p[0].x,
          height: id.p[0].y,
        };
      });
      return mediaContent;
    case "video":
      mediaContent["width"] = post.data.secure_media.reddit_video.width;
      mediaContent["height"] = post.data.secure_media.reddit_video.height;
      mediaContent["src"] = post.data.secure_media.reddit_video.fallback_url;
      return mediaContent;
    case "text":
      return mediaContent;
    default:
      console.log("mediaType not recognized");
  }
};
