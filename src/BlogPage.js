import React from "react";
import { Link, Outlet } from "react-router-dom";
// import { blogdata } from "./blogdata";
import { usePosts } from "./App/usePosts";


function BlogPage() {

    const {
        posts
    } = usePosts();

return (
    <React.Fragment>
        <h1>BlogPage</h1>
            <ul>
                {
                    posts.map(post =>
                        <BlogLink key={post.slug} post={post}/>
                        )
                    }
            </ul>
                   
        <Outlet/>
        
        
    </React.Fragment>
    )
}

// este seria el componente a mostrar
function BlogLink({post}){
    return (
        <li>
            <Link to={`/blog/${post?.slug}`}>{post?.title}</Link>
        </li>
    );
}


export {BlogPage};