import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import { FileSelectDirective } from "ng2-file-upload";
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  formApp= {
    title: '',
    description: '',
    price:'',
    image:''
  };
    app: any;
    error: any;

  constructor(private service: SessionService, private route: Router) { }
  ngOnInit() {
  }
  createApp(){
    this.service.saveService(this.formApp)
        .subscribe(
          (app)=> this.successCb(app),
          (err) => this.errorCb(err),
          ()=>{
            this.route.navigate([''])
          }

        );

  }
    errorCb(err) {
      this.error= err;
      this.app= null;
    }
    successCb(app){
      this.app= app;
      this.error= null;
    }
}
