import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { selectPosts, selectStatus } from "./selectors";
import { fetchPosts, filterAuthor } from "./postsSlice";

export const usePostsSelector = () => {
    return useSelector(selectPosts) 
}

export const usePostsStatus = () => {
    return useSelector(selectStatus) 
}

export const useFetchPosts = () => {
    const dispatch = useDispatch();
    return useCallback(()=>{
        dispatch(fetchPosts())
    }, [dispatch])
}

export const useFilterAuthor = () => {
    const dispatch = useDispatch();
    return useCallback((id) =>{
    dispatch(filterAuthor(id))},
    [dispatch]
    )
}