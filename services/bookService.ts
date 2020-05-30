import BookRepository from "../repositories/bookRepository.ts";
import Book from "../model/bookModel.ts";

class BookService {
  constructor() {}

  getAllBooks = async () => {
    const books = await BookRepository.all();
    return books;
  };

  getBookById = async (id: string) => {
    const book = await BookRepository.find(id);
    return book;
  };

  createBook = async (book: Book) => {
    return await BookRepository.create(book);
  };

  updateBook = async (id: string, book: Book) => {
    return await BookRepository.update(id, book);
  };

  deleteBook = async (id: string) => {
    return await BookRepository.delete(id);
  };
}

export default new BookService();