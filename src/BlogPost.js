import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "./App/auth";

import { usePosts } from "./App/usePosts";


function BlogPost() {

    const {
        deletePost,
        sincronizePost
    } = usePosts();

// citamos el hook useNavigate
    const navigate = useNavigate();
// gracias al manejador de estados useParams, podemos recibis los parametros
    const {slug} = useParams();

    // importamos el react hook de autenticacion
    const auth = useAuth()

    // utilizamos el arreglo blogdata para buscar el slug que se paso por parametro
    const blogpost = blogdata.find(post => post.slug === slug);

    const returnToBlog = () =>{
        navigate(-1);
    }

    
    const rolDelete = (auth.user?.isAdmin?.rol==='Admin' || auth.user?.username === blogpost.author || auth.user?.isAdmin?.rol==='Editor')

    const onDelete = (text) => {       
    const index = blogdata.findIndex(post => post.slug === slug)
    console.log(index);
    blogdata.splice(index,1);
    deletePost(text);
    navigate('/');
    sincronizePost(false);
    console.log(blogdata);
    }

return (
    <React.Fragment>
        <h2>{blogpost?.title}</h2>
        <p>{blogpost?.content}</p>        
        <p>{blogpost?.author}</p>
        <button onClick={returnToBlog}>Volver al Blog</button>

{/* si sos administrador o autor del post, podras borrar el post */}
        {rolDelete && (
            <button onClick={() => onDelete(blogpost?.title)}>Eliminar BlogPost</button>
        )}
    </React.Fragment>
    )
}


export {BlogPost};