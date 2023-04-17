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

    const addPost = ({titlePost, contenidoPost, autorPost}) => {
        // generamos localmente el slug
        let slug = titlePost.replace(/ /g, "-");
        console.log('el titulo será ',titlePost,' el contenido ',contenidoPost, ' y el autor ',autorPost,' el slug sera ',slug);
        const newPost = [...posts]

        newPost.push({
            title: titlePost,
            slug: slug,
            content: contenidoPost,
            author: autorPost,
        })

        savePost(newPost)
    }

    // datos que tiene que tener un post
// title:'Que es Angular',
// slug:'que-es-Angular',
// content:'Angular el framework mas usado.',
// author: 'Nahuel'

    return {
        deletePost,
        posts,
        sincronizePost,
        addPost
    }
}

export {usePosts}