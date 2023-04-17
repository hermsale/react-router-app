import React from "react";

function FormPost(){


    return(
        <>
        <h1>Crear Post</h1>
        <form>
            <label>Titulo</label>
            <input
                placeholder="Ingrese el titulo del post"
            />
            <label>Contenido</label>
            <textarea
                placeholder="Ingrese el contenido del post"
            />
            <label>Autor</label>
            <input
                placeholder="Ingrese el autor del post"
                
            />
            <button 
            type="submit"
            >Crear post</button>
        </form>
        </>
    )
}

export {FormPost}

// datos que tiene que tener un post
// title:'Que es Angular',
// slug:'que-es-Angular',
// content:'Angular el framework mas usado.',
// author: 'Nahuel'