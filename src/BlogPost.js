import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "./App/auth";

import { usePosts } from "./App/usePosts";
import './BlogPost.css';
import { ChangePost } from "./ChangePost";


function BlogPost() {

    const [openChangePost, setOpenChangePost] = React.useState('')

    const {
        deletePost,
        sincronizePost,
        posts
    } = usePosts();

// citamos el hook useNavigate
    const navigate = useNavigate();
// gracias al manejador de estados useParams, podemos recibis los parametros
    const {slug} = useParams();

    // importamos el react hook de autenticacion
    const auth = useAuth()

    // utilizamos el arreglo blogdata para buscar el slug que se paso por parametro
    const blogpost = posts.find(post => post.slug === slug);

    const returnToBlog = () =>{
        navigate(-1);
    }

    
    const rolDelete = (auth.user?.isAdmin?.rol==='Admin' || auth.user?.username === blogpost?.author || auth.user?.isAdmin?.rol==='Editor')

    const onDelete = (text) => {       
    const index = blogdata.findIndex(post => post.slug === slug)
    console.log(index);
    blogdata.splice(index,1);
    deletePost(text);
    navigate('/');
    sincronizePost(false);
    console.log(blogdata);
    }

    const onChangePost = (title) =>{
        setOpenChangePost(prevState => !prevState);
    }

return (
    <React.Fragment>
        <div className="blogpost">
            <h2 className="blogpost">Título: {blogpost?.title}</h2>
            <p className="blogpost">{blogpost?.content}</p>        
            <p className="blogpost">Autor: {blogpost?.author}</p>
            <div className="div__blogpost--button">
            <button className="blogpost btn-back" onClick={returnToBlog}>Volver al Blog</button>
        {/* si sos administrador o autor del post, podras borrar el post */}
            {rolDelete && (
                <button className="blogpost btn-back" onClick={() => onChangePost(blogpost?.title)}>Modificar Post</button>
            )}
            {rolDelete && (
                <button className="btn-delete" onClick={() => onDelete(blogpost?.title)}>Eliminar BlogPost</button>
            )}
            </div>
            {rolDelete && openChangePost &&(
                <ChangePost/>
            )}
        </div>

    </React.Fragment>
    )
}


export {BlogPost};