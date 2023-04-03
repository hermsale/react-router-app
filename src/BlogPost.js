import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";


function BlogPost() {
// citamos el hook useNavigate
    const navigate = useNavigate();
// gracias al manejador de estados useParams, podemos recibis los parametros
    const {slug} = useParams();

    // utilizamos el arreglo blogdata para buscar el slug que se paso por parametro
    const blogpost = blogdata.find(post => post.slug === slug);

    const returnToBlog = () =>{
        navigate(-1);
    }

return (
    <React.Fragment>
        <h2>{blogpost.title}</h2>
        <p>{blogpost.content}</p>        
        <p>{blogpost.author}</p>
        <button onClick={returnToBlog}>Volver al Blog</button>
    </React.Fragment>
    )
}

export {BlogPost};