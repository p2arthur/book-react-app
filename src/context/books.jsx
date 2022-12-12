import { createContext, useState } from "react";
import * as model from "../model";

//Creating a Book context
const BooksContext = createContext();

//Creating a Provider component to share data to the children component
function Provider({ children }) {
  //Setting a state into the context provider to rerender the app everytime it changes arround the app
  const [booksList, setBooksList] = useState([]);

  //Funtion to fetch the books and pass inside the use effect
  const fetchBooks = async () => {
    const getBooksResponse = await model.getBooksRequest();
    setBooksList(getBooksResponse.data);
  };

  //Creating a function to create a new book from the books array to be passed down as prop -> bookCreate
  const createBook = async (title) => {
    const { data } = await model.postBookRequest(title);

    setBooksList([...booksList, data]);
  };

  //Creating a function to delete a book from the books array to be passed down as prop -> BookList -> Bookshow
  const deleteBookById = async (id) => {
    await model.deleteBookRequest(id);
    setBooksList(booksList.filter((book) => book.id !== id));
  };

  //Creating a function to edit a book from the books array to be passed down as prop -> BookList -> Bookshow
  const editBookById = async (id, newTitle) => {
    const { data } = await model.putBookRequest(id, newTitle);

    setBooksList(
      booksList.map((book) => (book.id === id ? { ...book, ...data } : book))
    );
  };

  //Defining a variable to be shared to the children component

  const valueToShare = {
    booksList,
    fetchBooks,
    createBook,
    deleteBookById,
    editBookById,
  };

  //Returning the BooksContext.Provider with a value to be shared down the line
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

//Exporting the Provider and the BookContext to be use down the line
export { Provider };
export default BooksContext;
