import { Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'post/:slug', component: BlogPostComponent },
];
