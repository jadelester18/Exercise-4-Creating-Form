import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogModel } from '../../models/blog-model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input() blogsItem: BlogModel | undefined;
  @Output() editParam = new EventEmitter<BlogModel>();
  @Output() deleteParam = new EventEmitter<BlogModel>();

  edit = () => {
    this.editParam.emit(this.blogsItem);
  };
  delete = () => {
    this.deleteParam.emit(this.blogsItem);
  };
}
