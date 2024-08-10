import { Component, OnInit } from '@angular/core';
import { MarkdownEntry } from '../../model/markdown.entry.model';
import { ContentService } from '../../service/content.service';
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
  providers: [ContentService] // Provide BlogService here if not using providedIn: 'root'

})

export class BlogPostListComponent implements OnInit {
  public posts: MarkdownEntry[];

  constructor(private blogPostService: ContentService) { }

  ngOnInit(): void {

    this.blogPostService.getPosts().subscribe(data => {
      this.posts = data
    });
  }

}
