import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  user: any;
   formInfo = {
     username: '',
     password: ''
   };
   error: string;
   privateData: any = '';

  constructor(private session: SessionService, private router:Router) { }

   ngOnInit() {
     this.session.isLoggedIn()
       .subscribe(
         (user) => this.successCb(user)
       );
   }

   login() {
     console.log(this.formInfo);
     this.session.login(this.formInfo)
       .subscribe(
         (user) => {
           this.successCb(user)
           this.router.navigate(['members'])
         },
         (err) => this.errorCb(err),
        
       );
   }

   signup() {
     this.session.signup(this.formInfo)
       .subscribe(
         (user) => this.successCb(user),
         (err) => this.errorCb(err),
        
       );
   }

   logout() {
     this.session.logout()
       .subscribe(
         () => this.successCb(null),
         (err) => this.errorCb(err)
       );
   }

   getPrivateData() {
     this.session.getPrivateData()
       .subscribe(
         (data) => this.privateData = data,
         (err) => this.error = err
       );
   }

   errorCb(err) {
     this.error = err;
     this.user = null;
   }

   successCb(user) {
     this.user = user;
     this.error = null;
     this.router.navigate(['members'])
   }
}
