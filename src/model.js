"use strict";

import axios from "axios";

export async function postBookRequest(title) {
  const response = await axios.post("http://localhost:3001/books", {
    title,
  });

  return response;
}

export async function getBooksRequest() {
  const response = await axios.get("http://localhost:3001/books");
  return response;
}

export async function putBookRequest(id, newTitle) {
  const response = await axios.put(`http://localhost:3001/books/${id}`, {
    title: newTitle,
  });

  return response;
}

export async function deleteBookRequest(id) {
  axios.delete(`http://localhost:3001/books/${id}`);
}
