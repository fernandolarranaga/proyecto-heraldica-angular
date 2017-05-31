import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import { FileSelectDirective } from "ng2-file-upload";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    book: any;
    bookId: any;

constructor(private service:SessionService, private router:ActivatedRoute) { }

    ngOnInit() {
      this.router.params
      .subscribe((params) => {
        this.bookId = (params['id']);
        this.service.getBookDetail(this.bookId)
          .subscribe ((book) => {
            this.book = book;
            console.log(this.book);
          });
      });

    }
}
