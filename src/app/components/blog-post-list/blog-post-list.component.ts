import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../model/blog-post.model';
import { BlogPostService } from '../../service/blog-post.service';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { RouterModule } from '@angular/router';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-blog-post-list',
  standalone: true,
  imports: [BlogPostComponent, RouterModule, DatePipe, NgFor, AsyncPipe, HttpClientModule, MarkdownComponent],
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.css',
  providers: [BlogPostService] // Provide BlogService here if not using providedIn: 'root'

})

export class BlogPostListComponent implements OnInit {
  public posts: BlogPost[];

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {

    this.blogPostService.getPosts().subscribe(data => {
      this.posts = data
    });
  }

}
