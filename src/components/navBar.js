import React, { useContext} from 'react';
import {BookContext} from '../contexts/bookConext'
 

export const NavBar = () => {
    const {books} = useContext (BookContext);
    return ( 
        <div className='navBar'>
            <h1>JLI books List</h1>
            <p>Current you hava {books.length} to get</p>
        </div>
     );
}
 