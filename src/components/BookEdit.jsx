import { useState } from "react";

function BookEdit({ onEdit, book, onEditSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    onEditSubmit(book.id, newTitle);
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
