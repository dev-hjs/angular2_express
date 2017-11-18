import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: require( './not-found.component.html')
 // styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  title:string = "404error"
  msg : string = "페이지를 찾을 수 없습니다."
  constructor() { }

  ngOnInit() {
  }

}
