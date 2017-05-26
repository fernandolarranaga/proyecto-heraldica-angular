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
import { Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'formApp',  component: FormComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FormComponent,
    MembersComponent,
    HeadComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
