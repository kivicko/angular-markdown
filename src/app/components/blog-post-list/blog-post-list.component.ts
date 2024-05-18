import { Component } from '@angular/core';
import { BlogPost } from '../../model/blog-post.model';
import { BlogPostService } from '../../service/blog-post.service';
import { SelectedPostService } from '../../service/selected-post.service';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { RouterModule } from '@angular/router';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownFile } from '../../model/markdown-file.model';

@Component({
  selector: 'app-blog-post-list',
  standalone: true,
  imports: [BlogPostComponent, RouterModule, DatePipe, NgFor, AsyncPipe, HttpClientModule],
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.css',
  providers: [BlogPostService] // Provide BlogService here if not using providedIn: 'root'

})

export class BlogPostListComponent {
  public posts: MarkdownFile[];

  constructor(private blogPostService: BlogPostService,
    private selectedPostService: SelectedPostService) {

    console.log('blogpostlist constructor 1');
    this.blogPostService.getPosts().subscribe(data => {

      console.log('blogpostlist constructor 2' + data);

      this.posts = data
    });
  }

  showPostDetails(post: BlogPost) {
    this.selectedPostService.setSelectedPost(post);
  }
}
