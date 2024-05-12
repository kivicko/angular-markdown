import { Component, Input } from '@angular/core';
import { BlogPost } from '../../model/blog-post.model';
import { DatePipe } from '@angular/common';
import { SelectedPostService } from '../../service/selected-post.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../service/blog-post.service';
import { BlogShareComponent } from "../blog-share/blog-share.component";


@Component({
  selector: 'app-blog-post',
  standalone: true,
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
  imports: [DatePipe, BlogShareComponent]
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
    this.selectedPost = this.blogPostService.getPost(slug);

  }


}