// import React from "react";
import { useLocalStorage } from './useLocalStorage';

function usePosts(){

    const {
        post:posts,
        savePost,
        sincronizePost,
    } = useLocalStorage('blogpost',[])


    // funcion para eliminar un post 
    const deletePost = (title) => {
        const postIndex = posts.findIndex(post => post.title === title);
        const newPost = [...posts]
        newPost.splice(postIndex,1);
        savePost(newPost);
        // sincronizePost(false);
    }

    return {
        deletePost,
        posts,
        sincronizePost
    }
}

export {usePosts}