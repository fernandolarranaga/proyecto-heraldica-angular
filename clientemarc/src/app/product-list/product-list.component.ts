import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  error:any;
  user:any;
  books:Array<any>;

  constructor(private service:SessionService, private router:Router) { }

  ngOnInit() {
    this.service.findBooks()
    .subscribe ((books) => {
      this.books = books;
    });
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
