import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';

const blogPosts: BlogPost[] = [
    {
        title: 'Post 1 Title',
        slug: 'first-page',
        content: 'Content of post 1...',
        author: 'John Doe',
        date: new Date(),
    },
    {
        title: 'Post 2 Title',
        slug: 'second-page',
        content: 'Content of post 2...',
        author: 'Jane Smith',
        date: new Date(),
    },
];

@Injectable({ providedIn: 'root' })
export class BlogPostService {
    getPosts(): Observable<BlogPost[]> {
        return of(blogPosts);
    }
}
