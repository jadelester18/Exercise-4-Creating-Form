import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookModel } from '../../models/book-model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;

  nameArray: FormControl;
  authorsArray: FormArray;
  isbnArray: FormControl;
  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      name: ['Jade'],
      authors: this.fb.array(['me', 'you', 'us']),
      isbn: ['123'],
      // address: this.fb.group({
      //   street: [''],
      //   city: [''],
      //   country: ['']
      // })
    });
    // this.authors = this.bookForm.controls['authors'] as FormArray;
    this.nameArray = this.bookForm.get('name') as FormControl;
    this.authorsArray = this.bookForm.get('authors') as FormArray;
    this.isbnArray = this.bookForm.get('isbn') as FormControl;
  }

  ngOnInit(): void {
    this.bookForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit = () => {
    const myBook: BookModel = this.bookForm.value as BookModel;
    console.log('myBook');
  };
}
