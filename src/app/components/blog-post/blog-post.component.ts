import { Component, Input } from '@angular/core';
import { MarkdownEntry } from '../../model/markdown.entry.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContentService, emptyPost } from '../../service/content.service';
import { BlogShareComponent } from "../blog-share/blog-share.component";
import { HttpClientModule } from '@angular/common/http';
import { MarkdownComponent } from 'ngx-markdown';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
  imports: [DatePipe, BlogShareComponent, HttpClientModule, MarkdownComponent],
  providers: [ContentService] // Provide BlogService here if not using providedIn: 'root'
})

export class BlogPostComponent {
  selectedPost: MarkdownEntry;

  constructor(private blogPostService: ContentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const slug: string = this.route.snapshot.paramMap.get('slug');
    this.blogPostService.getPost(slug).subscribe(
      (post: MarkdownEntry) => {
        this.selectedPost = post;
      },
      (error) => {
        console.error('Error loading blog post:', error);
        this.selectedPost = emptyPost
        // Handle error appropriately
      }
    );

  }


}