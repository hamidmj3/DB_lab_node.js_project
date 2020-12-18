import { Body, Controller, Get, ParseIntPipe, Post, Put,Delete,Query } from '@nestjs/common';
import { BooksService } from './books.service';
import {CreateBookDto,updateBookDto} from '../user/dto/create-book.dto';

@Controller('book')
export default class BooksController {
  constructor(private readonly bookServices: BooksService) {}
  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.bookServices.insert(book);
  }
  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }
  @Put()
  updateBook(@Body() book: updateBookDto){
      return this.bookServices.update(book)

  }
  @Delete()
  deleteBook(@Query('id') id){
    return this.bookServices.delete(id)
  }

}