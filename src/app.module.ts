import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ItemModule } from './item/item.module';
import { TagModule } from './tag/tag.module';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import UserEntity from './db/user.entity';
import BooksModule from './Books/books.module';
import GenreModule from './Genre/genre.module';
import BookEntity from './db/book.entity';
import GenreEntity from './db/genre.entity';

@Module({
  imports: [UserModule ,
            BooksModule,
            GenreModule,
    TypeOrmModule.forFeature(
      [UserEntity, BookEntity , GenreEntity],
    ),

    TypeOrmModule.forRoot(),

    AuthModule,

    ItemModule,

    TagModule,

    TaskModule,

    CategoryModule,
  ],
  controllers: [AppController],
  
  providers: [AppService],
})
export class AppModule {}
