import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
       { path:"",component:HomeComponent},
       { path:"home",component:HomeComponent},
       { path:"about",component:AboutComponent},
       { path:"faq",component:FaqComponent},
       { path:"contact",component:ContactComponent},
       { path:"login",component:LoginComponent},
       { path:"signup",component:SignupComponent},
];
