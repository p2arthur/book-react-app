import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => deleteBookById(book.id);

  const handleEditClick = () => setShowEdit(!showEdit);

  const onEditSubmit = () => {
    setShowEdit(false);
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
