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
    !post.data.is_self &&
    post.data.preview
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
      const resolutions = post.data.preview.images[0].resolutions;
      mediaContent["src"] = cleanUrl(
        resolutions[resolutions.length -1].url
      );
      mediaContent["height"] =
      resolutions[resolutions.length -1].height;
      mediaContent["width"] = resolutions[resolutions.length -1].width;
      return mediaContent;
    case "gallery":
      mediaContent["gallery_info"] = Object.entries(post.data.media_metadata).map((id) => {
        const resolutions = id[1].p;
        return {
          src: cleanUrl(resolutions[resolutions.length - 1].u),
          width: resolutions[resolutions.length - 1].x,
          height: resolutions[resolutions.length - 1].y,
        };
      });
      return mediaContent;
    case "video":
      mediaContent["width"] = post.data.secure_media.reddit_video.width;
      mediaContent["height"] = post.data.secure_media.reddit_video.height;
      mediaContent["src"] = post.data.secure_media.reddit_video.fallback_url;
      return mediaContent;
    case "text":
      if(post.data.selftext) {
        mediaContent["selftext"] = post.data.selftext;
      }
      return mediaContent;
    default:
      console.log("mediaType not recognized");
  }
};
