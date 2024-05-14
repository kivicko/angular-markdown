import { Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { UsesPageComponent } from './components/uses-page/uses-page.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'post/:slug', component: BlogPostComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogPageComponent },
    { path: 'uses', component: UsesPageComponent },



];
