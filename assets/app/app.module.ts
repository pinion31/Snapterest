import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from './services/users.service';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserComponent } from './browser/browser.component';
import { StarGroupComponent } from './star-group/star-group.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'welcome', component: DashboardComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'recent-snapcards', component: BrowserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavBarComponent,
    UserComponent,
    RegisterComponent,
    DashboardComponent,
    ModalBasicComponent,
    BrowserComponent,
    StarGroupComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
