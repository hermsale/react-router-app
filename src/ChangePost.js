import React from "react";
import { usePosts } from "./App/usePosts";

function ChangePost(){

    const {
        setContenidoPost,
        contenidoPost
    } = usePosts();

    const changePost = (e) =>{
        e.preventDefault();
        console.log(contenidoPost);
        // const posteo = {
        //     titlePost: titlePost,
        //     autorPost: autorPost,
        //     contenidoPost: contenidoPost,
        // }

        // addPost(posteo);
    } 

    return(
        <>
        <h1>Modificar Post </h1>
        <form onSubmit={changePost}>
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