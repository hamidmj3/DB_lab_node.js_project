import BookEntity from '../db/book.entity';
import {CreateBookDto, updateBookDto} from '../user/dto/create-book.dto';
import UserEntity from '../db/user.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import GenreEntity from '../db/genre.entity';

export class BooksService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async update(bookDetails: updateBookDto): Promise<BookEntity>{
    const { name , userID , genreIDs,id } = bookDetails;
    let book = await BookEntity.findOne(id)
    book.name = name;
    book.user = await UserEntity.findOne(userID);
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await BookEntity.save(book)
    return book

  }
  async delete(id :string):Promise<void>{
    await BookEntity.delete(id);

  }
  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }
}
