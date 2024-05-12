import { Component, Input } from '@angular/core';
import { BlogPost } from '../../model/blog-post.model';
import { DatePipe } from '@angular/common';
import { SelectedPostService } from '../../service/selected-post.service';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})

export class BlogPostComponent {
  selectedPost: BlogPost | null = null;

  constructor(private selectedPostService: SelectedPostService) { }

  ngOnInit() {
    console.log("ngOnInit inside BlogPostComponent")
    this.selectedPostService.selectedPost$.subscribe(
      (post) => (this.selectedPost = post)
    );
  }


}