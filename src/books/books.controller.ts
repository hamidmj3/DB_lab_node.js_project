import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from '../user/dto/create-book.dto';

@Controller('book')
export default class GenreController {
  constructor(private readonly genreServices: BooksService) {}
  @Post('post')
  postGenre( @Body() genre: CreateBookDto) {
    return this.genreServices.insert(genre);
  }
  @Get()
  getAll() {
    return this.genreServices.getAllBooks();
  }
}