import React from 'react';

function useLocalStorage(itemName, initialValue){
    
    
    React.useEffect( () => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
        }else{
            parsedItem = JSON.parse(localStorageItem);
        }
    })

    const savePost = () => {
        
    }



}

export {useLocalStorage}