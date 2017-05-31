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
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'app-form',  component: FormComponent },
  { path: 'log',  component: LogComponent },
  { path: 'members',  component: MembersComponent },
  { path: 'formulario', component: FormComponent },
  { path: 'listado-proyectos', component: ProductListComponent},
  { path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FormComponent,
    MembersComponent,
    HeadComponent,
    LogComponent,
    ProductListComponent,
    DetailsComponent,
    HomeComponent,



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
