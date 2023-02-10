import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Posts } from "../../components/posts/posts";
import { loadPopular, selectPosts } from "../../features/posts/postsSlice"


export const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPopular());
    }, [dispatch])

    const posts = useSelector(selectPosts);

    return (
    <div className="homePageContainer">
        <Posts posts={posts} />
    </div>
    )

}