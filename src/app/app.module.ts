import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserComponent } from './browser/browser.component';
import { RouterModule, Routes } from '@angular/router';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
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
    UserComponent,
    RegisterComponent,
    ModalBasicComponent,
    MainNavBarComponent,
    LoginComponent,
    DashboardComponent,
    BrowserComponent,
    StarGroupComponent
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
