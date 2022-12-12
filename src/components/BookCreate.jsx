import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook, booksList } = useBooksContext();

  //Controlled component for the input
  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(booksList);
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="create-book__input">Book title:</label>
        <input
          className="input"
          id="create-book__input"
          value={title}
          onChange={handleInputChange}
          type="text"
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
