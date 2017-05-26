import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import { FileSelectDirective } from "ng2-file-upload";

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

  constructor(private service: SessionService) { }

  ngOnInit() {
  }
  createApp(){
    this.service.saveService(this.formApp)
        .subscribe(
          (app)=> this.successCb(app),
          (err) => this.errorCb(err)

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
