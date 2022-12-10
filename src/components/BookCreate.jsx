import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  //Controlled component for the input
  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
