import React from "react";
import { useParams } from "react-router-dom";
import { blogdata } from "./blogdata";


function BlogPost() {
// gracias al manejador de estados useParams, podemos recibis los parametros
    const {slug} = useParams();
    // utilizamos el arreglo blogdata para buscar el slug que se paso por parametro
    const blogpost = blogdata.find(post => post.slug === slug);
return (
    <React.Fragment>
        <h2>{blogpost.title}</h2>
        <p>{blogpost.content}</p>        
        <p>{blogpost.author}</p>
    </React.Fragment>
    )
}

export {BlogPost};