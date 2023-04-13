import React from "react";
import useLocalStorage from "./useLocalStorage"

function usePosts(){

    const {
        posts,
        savePost,
    } = useLocalStorage('blogpost',[])


    // funcion para eliminar un post 
    const deletePost = (title) => {
        const postIndex = posts.findIndex(post => post.title === title);
        const newPost = [...posts]
        newPost.splica(postIndex,1);

        savePost(newPost);
    }
}

export {usePosts}