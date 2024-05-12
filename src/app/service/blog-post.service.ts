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
        readLength: "10 min.",
        excerpt: "This is the excerpt of first post.",
        category: "Category 1"
    },
    {
        title: 'Post 2 Title',
        slug: 'second-page',
        content: 'Content of post 2...',
        author: 'Jane Smith',
        date: new Date(),
        readLength: "5 min",
        excerpt: "This is the excerp of second post",
        category: "Category 1"
    },
];

@Injectable({ providedIn: 'root' })
export class BlogPostService {
    getPosts(): Observable<BlogPost[]> {
        return of(blogPosts);
    }

    getPost(slug: string): BlogPost {
        return blogPosts.find(s => s.slug === slug);
    }
}
