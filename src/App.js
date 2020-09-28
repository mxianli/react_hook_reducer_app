import React from 'react';
import BookContextProvider from './contexts/bookConext';
import {NavBar} from './components/navBar';
import BookList from './components/bookList';
import NewBookForm from './components/newBookForm';
import FootBar from './components/footBar';


function App() {
  return (
    <div className="App">
       <BookContextProvider>
         <NavBar />
         <BookList />
         <NewBookForm />
        <FootBar />
       </BookContextProvider>
    </div>
  );
}

export default App;
