export  class CreateBookDto {
    readonly name: string;
    readonly userID: number;
    readonly genreIDs: number[];
  }

  export  class updateBookDto {
    readonly id: string;
    readonly name: string;
    readonly userID: number;
    readonly genreIDs: number[];
  } 