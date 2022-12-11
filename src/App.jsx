import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import * as model from "./model";
import { useState, useEffect } from "react";

function App() {
  const [booksList, setBooksList] = useState([]);

  const fetchBooks = async () => {
    const getBooksResponse = await model.getBooksRequest();
    setBooksList(getBooksResponse.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //Creating a function to create a new book from the books array to be passed down as prop -> bookCreate
  const createBook = async (title) => {
    const postResponse = await model.postBookRequest(title);
  };

  //Creating a function to delete a book from the books array to be passed down as prop -> BookList -> Bookshow
  const deleteBookById = async (id) => {
    await model.deleteBookRequest(id);
    setBooksList(booksList.filter((book) => book.id !== id));
  };

  //Creating a function to edit a book from the books array to be passed down as prop -> BookList -> Bookshow
  const editBookById = async (id, newTitle) => {
    const { data } = await model.putBookRequest(id, newTitle);

    setBooksList(
      booksList.map((book) => (book.id === id ? { ...book, ...data } : book))
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
