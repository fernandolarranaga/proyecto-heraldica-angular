import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  user: any;
  clicked: any;
   formInfo = {
     username: '',
     password: ''
   };
   error: string;
   privateData: any = '';

  constructor(private session: SessionService, private router:Router) { }

   ngOnInit() {
     this.clicked= false;
     this.session.isLoggedIn()
       .subscribe(
         (user) => this.successCb(user)
       );
   }

   logout() {
     this.session.logout()
       .subscribe(
         () => this.successCb(null),
         (err) => this.errorCb(err)
       );
   }
   click(){
       this.clicked = !this.clicked;
   }

   getPrivateData() {
     this.session.getPrivateData()
       .subscribe(
         (data) => this.privateData = data,
         (err) => this.error = err
       );
       this.router.navigate(['private-zone'])
   }

   errorCb(err) {
     this.error = err;
     this.user = null;
   }

   successCb(user) {
     this.user = user;
     this.error = null;

   }
 }
