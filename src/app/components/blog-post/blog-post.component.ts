import { Component, Input } from '@angular/core';
import { BlogPost } from '../../model/blog-post.model';
import { DatePipe } from '@angular/common';
import { SelectedPostService } from '../../service/selected-post.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../service/blog-post.service';
import { BlogShareComponent } from "../blog-share/blog-share.component";
import { HttpClientModule } from '@angular/common/http';
import { MarkdownComponent } from 'ngx-markdown';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
  imports: [DatePipe, BlogShareComponent, HttpClientModule, MarkdownComponent],
  providers: [BlogPostService] // Provide BlogService here if not using providedIn: 'root'
})

export class BlogPostComponent {
  selectedPost: BlogPost | null = null;

  constructor(private selectedPostService: SelectedPostService,
    private blogPostService: BlogPostService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    // this.selectedPostService.selectedPost$.subscribe(
    //   (post) => (this.selectedPost = post)
    // );

    const slug: string = this.route.snapshot.paramMap.get('slug');
    this.blogPostService.getPost(slug).subscribe(
      (post: BlogPost) => {
        this.selectedPost = post;
      },
      (error) => {
        console.error('Error loading blog post:', error);
        // Handle error appropriately
      }
    );

    console.log(this.selectedPost);
  }


}