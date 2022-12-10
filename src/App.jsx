import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [booksList, setBooksList] = useState([]);

  const createBook = (title) => {
    setBooksList([...booksList, { title: title }]);
    console.log(booksList);
  };

  return (
    <div>
      <div>Hello world</div>
      {booksList.length}
      <BookList />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
