import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import { useEffect, useContext } from "react";
import BooksContext from "./context/books";

function App() {
  //Importing functionality from the BooksContext
  const { fetchBooks } = useContext(BooksContext);

  //Use effect to fetch the data from the server when the App component renders => Only renders on load []
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List:</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
