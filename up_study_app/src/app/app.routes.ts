import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { PostComponent } from './page/post/post.component';
import { ProfileComponent } from './page/profile/profile.component';
import { PublicationComponent } from './page/publication/publication.component';
import { RegisterComponent } from './page/register/register.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [

    {
        path:"", 
        component: HomeComponent
    },

    {
        path:"login", 
        component: LoginComponent
    }, 

    {
        path:"post", 
        component: PostComponent
    },

    {
        path:"profile", 
        component: ProfileComponent
    },

    {
        path:"publication", 
        component: PublicationComponent
    },

    {
        path:"register", 
        component: RegisterComponent
    },

    {
        path:"**", 
        redirectTo: "",
        pathMatch: "full"
    }
   

];
