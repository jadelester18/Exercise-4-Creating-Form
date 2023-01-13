import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blog-model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  id(id: any) {
    throw new Error('Method not implemented.');
  }
  blogs: BlogModel[] = [
    {
      id: 1,
      title: 'My Title 1',
      description: 'Description 1',
      author: 'First Author',
      comments: ['comment 1', 'comment 1.1'],
    },
    {
      id: 2,
      title: 'My Title 2',
      description: 'Description 2',
      author: 'First Author',
      comments: ['comment 2', 'comment 2.1'],
    },
  ];

  constructor() {}

  getBlogs() {
    return this.blogs;
  }
}
