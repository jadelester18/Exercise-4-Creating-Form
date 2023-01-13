import { Injectable } from '@angular/core';
import { BookModel } from '../models/book-model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  id(id: any) {
    throw new Error('Method not implemented.');
  }
  books: BookModel[] = [
    {
      id: 1,
      name: 'Jade',
      authors: ['Master Jade'],
      isbn: '123456',
    },
    {
      id: 2,
      name: 'Lester',
      authors: ['King Lester'],
      isbn: '654321',
    },
  ];

  constructor() {}

  getBooks() {
    return this.books;
  }
}
