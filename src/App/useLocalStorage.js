import React from 'react';

function useLocalStorage(itemName, initialValue){

    const [error, setError] = React.useState(false);
    const [post, setPost] = React.useState(initialValue);
    const [syncPosts, setSincronizePost] = React.useState(true);
    
    
    React.useEffect( () => {

        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            }else{
                parsedItem = JSON.parse(localStorageItem);
            }

            setPost(parsedItem);
            setSincronizePost(true);
        } catch (err) {
            console.log('ocurrio un error',err);
            setError(err);
        }
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    },[syncPosts])

    const savePost = (newPost) => {
        try {
            const stringify = JSON.stringify(newPost);
            localStorage.setItem(itemName, stringify);
            setPost(newPost)
        } catch (err) {
            setError(err);
        }
        
    }

    const sincronizePost = () => {
        setSincronizePost(false);
    }


    return {
        savePost,
        error,
        post,
        sincronizePost
    }

}

export {useLocalStorage};