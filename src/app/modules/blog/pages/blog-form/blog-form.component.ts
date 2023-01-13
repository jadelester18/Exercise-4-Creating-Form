import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BlogModel } from '../../models/blog-model';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;

  titleArray: FormControl;
  descriptionArray: FormControl;
  authorArray: FormControl;
  commentsArray: FormArray;
  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['Sample Title'],
      description: ['Sample Desc'],
      author: ['Sample Author'],
      comments: this.fb.group(['hello', 'thank you', 'great']),
    });
    this.titleArray = this.blogForm.get('title') as FormControl;
    this.descriptionArray = this.blogForm.get('description') as FormControl;
    this.authorArray = this.blogForm.get('author') as FormControl;
    this.commentsArray = this.blogForm.get('comments') as FormArray;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit = () => {
    const myBlog: BlogModel = this.blogForm.value as BlogModel;
    console.log('myBlog');
  };
}
