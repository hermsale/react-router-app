import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

function usePosts(){

    const [titlePost, setTitlePost] = React.useState('');
    const [contenidoPost, setContenidoPost] = React.useState('');
    const [autorPost, setAutorPost] = React.useState('');

    const navigate = useNavigate();

    const {
        post:posts,
        savePost,
        sincronizePost,
    } = useLocalStorage('blogpost',[])


    // funcion para eliminar un post del LocalStorage
    const deletePost = (title) => {
        const postIndex = posts.findIndex(post => post.title === title);
        const newPost = [...posts]
        newPost.splice(postIndex,1);
        savePost(newPost);
        // sincronizePost(false);
    }

    // agerga un post al LocalStorage
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
        navigate('/blog');
    }

    const changePost = ({titlePost, contenidoPost}) => {
        console.log(titlePost, contenidoPost);
        const postIndex = posts.findIndex(post => post.title === titlePost);
        const newPost = [...posts]
        // newPost.splice(postIndex,1);
        console.log(postIndex, newPost);
        newPost[postIndex].content = contenidoPost;
        savePost(newPost);

        navigate('/blog');
    }
    

    return {
        deletePost,
        posts,
        sincronizePost,
        addPost,
        titlePost,
        setTitlePost,
        contenidoPost,
        setContenidoPost,
        autorPost,
        setAutorPost,
        changePost
    }
}

export {usePosts}