import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  //Importing the books array from the context
  const { booksList } = useBooksContext();

  const renderedBooks = booksList.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
