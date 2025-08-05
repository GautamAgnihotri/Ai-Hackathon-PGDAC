// services/books.js
import axios from "axios";

export async function createBook(bookData) {
  try {
    const response = await axios.post("http://localhost:3000/api/books", bookData);
    return response.data;
  } catch (error) {
    console.error("Failed to create book:", error);
    throw error;
  }
}
