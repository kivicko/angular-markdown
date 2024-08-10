import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../service/content.service';
import { MarkdownEntry } from '../../model/markdown.entry.model';
import { BlogPostListComponent } from '../blog-post-list/blog-post-list.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogPostListComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
  providers: [ContentService]
})
export class BlogPageComponent implements OnInit {

  posts: MarkdownEntry[];

  constructor(private blogPostService: ContentService) { }

  ngOnInit(): void {
    this.blogPostService.getPosts().subscribe(data => {
      this.posts = data
    });

  }
}
