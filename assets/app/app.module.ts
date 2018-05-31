import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from './services/users.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'sign-up', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavBarComponent,
    UserComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
