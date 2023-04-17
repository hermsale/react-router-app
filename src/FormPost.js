import React from "react";
import { usePosts } from "./App/usePosts";
import './FormPost.css';

function FormPost(){

    const { 
        addPost 
    } = usePosts();

    const [titlePost, setTitlePost] = React.useState('');
    const [contenidoPost, setContenidoPost] = React.useState('');
    const [autorPost, setAutorPost] = React.useState('');

    const createPost = (e) =>{
        e.preventDefault();

        const posteo = {
            titlePost: titlePost,
            autorPost: autorPost,
            contenidoPost: contenidoPost,
        }

        addPost(posteo);
    } 

    return(
        <>
        <h1>Crear Post</h1>
        <form onSubmit={createPost}>
            <label>Titulo</label>
            <input
                placeholder="Ingrese el titulo del post"
                onChange={
                    (e) => {
                        setTitlePost(e.target.value)
                    }
                }
            />
            <label>Contenido</label>
            <textarea
                placeholder="Ingrese el contenido del post"
                onChange={
                    (e) => {
                        setContenidoPost(e.target.value)
                    }
                }
            />
            <label>Autor</label>
            <input
                placeholder="Ingrese el autor del post"
                onChange={
                    (e) =>{
                        setAutorPost(e.target.value);
                    }
                }
            />
            <button 
            type="submit"
            >Crear post</button>
        </form>
        </>
    )
}

export {FormPost}

