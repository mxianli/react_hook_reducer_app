import React, { useReducer, createContext, useEffect} from 'react';
import { bookReducer } from '../reducer/BookReducer';
 

export const BookContext = createContext();

const BookContextProvider = (props) => {
    //if there are some data in localstorage, return it at init
    const [books, dispatch] = useReducer ( bookReducer, [], ()=>{
        const localData = localStorage.getItem('books');
        return localStorage?JSON.parse(localData):[];
    });

    useEffect (()=>{
        //it is deburge page, then application page, at the start server, 
        // it will be [], because it called without any data
        localStorage.setItem ('books', JSON.stringify (books))
    }, [books]);
    return (
        <BookContext.Provider value = { {books, dispatch}} >
            {props.children}
        </BookContext.Provider>
    )
    
}
 
export default BookContextProvider;

 