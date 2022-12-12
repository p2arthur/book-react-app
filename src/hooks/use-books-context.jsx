import { useContext } from "react";
import BooksContext from "../context/books";

//Creating a custom Hook to be reused
function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
