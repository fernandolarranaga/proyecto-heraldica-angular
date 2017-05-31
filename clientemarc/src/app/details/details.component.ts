import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import { FileSelectDirective } from "ng2-file-upload";
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    error:any;
    user:any;
    objproyect;

constructor(private service:SessionService, private router:Router) { }

  ngOnInit() {

    }
  }
