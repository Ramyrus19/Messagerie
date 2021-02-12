import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { CommentComponent } from './components/comment/comment.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NontrouveComponent} from './components/nontrouve/nontrouve.component';
import { UserComponent } from './components/user/user.component';

const appRoutes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'user/:param', component: UserComponent},
  // {path: '**', component: NontrouveComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    CommentComponent,
    MessageFormComponent,
    NontrouveComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
