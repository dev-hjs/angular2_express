import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { User } from '../user/user';
@Component({
  selector: 'app-user-insert',
  template:require("./user-insert.component.html")
})
export class UserInsertComponent implements OnInit {

  user : User = new User();
  @Output() outputUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }

  addUser():void{
    this.outputUser.emit(this.user);
  }
}
