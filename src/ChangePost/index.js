import React from "react";
import { usePosts } from "../App/usePosts";
import "./ChangePost.css"

function ChangePost({title,setOpenChangePost}){

    const {
        setContenidoPost,
        contenidoPost,
        changePost,
    } = usePosts();

    const onChangePost = (e) =>{
        e.preventDefault();

        const updatePost = {
            titlePost: title,
            contenidoPost: contenidoPost,
        }

        changePost(updatePost)
    } 
    

    const onCancel = () =>{
        setOpenChangePost(prevState => !prevState);
    }

    return(
        <>
        <div className="form__changePost">
            <h1>Modificar Post </h1>
            <form  onSubmit={onChangePost}>
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
                <button 
                    className="btn-cancel"
                    onClick={() => onCancel()}
                >Cancelar</button>
            </form>
        </div>
        </>
    );
}

export {ChangePost};