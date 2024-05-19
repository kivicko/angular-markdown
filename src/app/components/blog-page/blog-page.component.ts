import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../service/blog-post.service';
import { BlogPost } from '../../model/blog-post.model';
import { BlogPostListComponent } from '../blog-post-list/blog-post-list.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogPostListComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
  providers: [BlogPostService]
})
export class BlogPageComponent implements OnInit {

  posts: BlogPost[];

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.blogPostService.getPosts().subscribe(data => {
      this.posts = data
    });

  }
}
