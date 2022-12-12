import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => (
    <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  ));

  const handleCountClick = () => incrementCount();

  return (
    <div>
      {count}
      <button onClick={handleCountClick}>
        Click me to increment the count
      </button>
      <div className="book-list">{renderedBooks}</div>
    </div>
  );
}

export default BookList;
