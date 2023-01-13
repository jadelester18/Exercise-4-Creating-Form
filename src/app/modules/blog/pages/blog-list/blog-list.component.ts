import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../../models/blog-model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: BlogModel[] | undefined;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

  executeAction = (blogs: BlogModel) => {
    console.log(blogs.id);
  };
}
