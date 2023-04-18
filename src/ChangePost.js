import React from "react";
import { usePosts } from "./App/usePosts";

function ChangePost(props){

    const {
        setContenidoPost,
        contenidoPost,
        changePost
    } = usePosts();

    const onChangePost = (e) =>{
        e.preventDefault();

        const updatePost = {
            titlePost: props.title,
            contenidoPost: contenidoPost,
        }

        changePost(updatePost)
    } 

    return(
        <>
        <h1>Modificar Post </h1>
        <form onSubmit={onChangePost}>
            <label>Contenido</label>
            <textarea
                placeholder="Ingrese el contenido del post"
                onChange={
                    (e) => {
                        setContenidoPost(e.target.value)
                    }
                }
            />            
            <button 
            type="submit"
            >Guardar cambios</button>
        </form>
        </>
    );
}

export {ChangePost};