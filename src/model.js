"use strict";

import axios from "axios";

export async function postRequest(title) {
  const response = await axios.post("http://localhost:3001/books", {
    title,
  });

  return response;
}

export async function getRequest() {
  const response = await axios.get("http://localhost:3001/books");
  return response;
}
