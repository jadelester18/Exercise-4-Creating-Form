import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../../models/book-model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() booksItem: BookModel | undefined;
  @Output() editParam = new EventEmitter<BookModel>();
  @Output() deleteParam = new EventEmitter<BookModel>();

  edit = () => {
    this.editParam.emit(this.booksItem);
  };
  delete = () => {
    this.deleteParam.emit(this.booksItem);
  };
}
