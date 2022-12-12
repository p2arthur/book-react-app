import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onEditSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const { editBookById } = useContext(BooksContext);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, newTitle);
    onEditSubmit();
  };

  const handleInputChange = (event) => setNewTitle(event.target.value);

  return (
    <div>
      <form className="book-edit" onSubmit={handleEditSubmit} action="">
        <input
          className="input"
          value={newTitle}
          onChange={handleInputChange}
          type="text"
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
