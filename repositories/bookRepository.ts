import { colldb } from "../configs/database.ts";
import Book from "../model/bookModel.ts";

class BookRepository {
  constructor() {}

  async all() {
    const books = await colldb.find();
    return books;    
  }

  async find(id: string) {
    const book = await colldb.findOne({_id: {"$oid": id}});
    return book;
  }

  async create(book: Book) {
    const { $oid } = await colldb.insertOne(book);
    return $oid;
  }

  async update(id: string, book: Book) {
    const result  = await colldb.updateOne({_id: {"$oid": id}}, {$set: book});
    return result ;
  }

  async delete(id: string) {
    const result = await colldb.deleteOne({title: id});
    return result;
  }
}
export default new BookRepository();