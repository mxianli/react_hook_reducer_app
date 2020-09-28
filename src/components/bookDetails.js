import React, {useContext} from 'react';
import {BookContext}  from '../contexts/bookConext';

const BookDetails = ({ book }) => {

    const {dispatch} = useContext (BookContext);
   
    return ( 
        <li>
        <div className='title' onClick ={ () => dispatch ( 
            {type: 'REMOVE_BOOK', id: book.id })}  >{book.title}</div>
         <div className='author'>{book.author}</div>
        </li>
         
     );
}
 
export default BookDetails;