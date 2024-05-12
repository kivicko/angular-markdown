import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../../model/blog-post.model';
import { BlogPostService } from '../../service/blog-post.service';
import { SelectedPostService } from '../../service/selected-post.service';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { RouterModule } from '@angular/router';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-post-list',
  standalone: true,
  imports: [BlogPostComponent, RouterModule, DatePipe, NgFor, AsyncPipe], // Import the blog-post component
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.css'
})

export class BlogPostListComponent {
  public posts: Observable<BlogPost[]> = this.blogPostService.getPosts();

  constructor(private blogPostService: BlogPostService,
    private selectedPostService: SelectedPostService) { }

  showPostDetails(post: BlogPost) {
    this.selectedPostService.setSelectedPost(post);
  }
}
