import { useState } from "react";

import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => onDelete(book.id);

  const handleEditClick = () => setShowEdit(!showEdit);

  const onEditSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200`} alt="book image" />
      {!showEdit ? (
        <h3>{book.title}</h3>
      ) : (
        <BookEdit onEditSubmit={onEditSubmit} book={book} />
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
