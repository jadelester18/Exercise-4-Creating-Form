import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book-model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: BookModel[] | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  executeAction = (books: BookModel) => {
    console.log(books.id);
  };
}
