import React from 'react';

function useLocalStorage(itemName, initialValue){

    const [error, setError] = React.useState(false);
    const [post, setPost] = React.useState(initialValue);
    
    
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
        } catch (err) {
            console.log('ocurrio un error',err);
            setError(err);
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const savePost = (newPost) => {
        try {
            const stringify = JSON.stringify(newPost);
            localStorage.setItem(itemName, stringify);
            setPost(newPost)
        } catch (err) {
            setError(err);
        }
        
    }


    return {
        savePost,
        error,
        post,
    }

}

export {useLocalStorage};