import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [booksList, setBooksList] = useState([]);

  //Creating a function to create a new book from the books array to be passed down as prop -> bookCreate
  const createBook = (title) => {
    setBooksList([
      ...booksList,
      { id: Math.floor(Math.random() * 9999), title },
    ]);
  };

  //Creating a function to delete a book from the books array to be passed down as prop -> BookList -> Bookshow
  const deleteBookById = (id) => {
    setBooksList(booksList.filter((book) => book.id !== id));
  };

  //Creating a function to edit a book from the books array to be passed down as prop -> BookList -> Bookshow
  const editBookById = (id, newTitle) => {
    setBooksList(
      booksList.map((book) =>
        book.id === id ? { ...book, title: newTitle } : book
      )
    );
  };

  return (
    <div className="app">
      <h1>Reading List:</h1>
      <BookList
        onEdit={editBookById}
        onDelete={deleteBookById}
        books={booksList}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
