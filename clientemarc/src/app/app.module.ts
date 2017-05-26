import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SessionService } from "./session.service";
import { FileSelectDirective } from "ng2-file-upload";
import { FormComponent } from './form/form.component';
import { MembersComponent } from './members/members.component';
import { HeadComponent } from './head/head.component';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'formApp',  component: FormComponent },
  { path: 'log',  component: LogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FormComponent,
    MembersComponent,
    HeadComponent,
    LogComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
