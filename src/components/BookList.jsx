import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList() {
  //Importing the books array from the context
  const { booksList } = useContext(BooksContext);

  const renderedBooks = booksList.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
