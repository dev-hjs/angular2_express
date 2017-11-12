import { Component, OnInit } from '@angular/core';
import {UserDataService} from './user-data.service';
import {User} from './user';
import {UserHis} from './user-his';
import {UserCss} from './user.css';

@Component({
  selector: 'app-user',
  template:require("./user.component.html"),
  providers:[UserDataService],
  styles:UserCss
})
export class UserComponent implements OnInit {
  userList:Array<User>=[];
  searchUser:User = new User();
  errorMsg:string = '';
  addUserShow:boolean = false;
  addUserBtnStr:string='Show Add User Div';
  title:string = 'User List';
  showDialog:boolean = false;
  userHisList:Array<UserHis>=[];

  constructor(private uds: UserDataService) { 
    this.getUsers();
  }

  ngOnInit() {
  }
  showUserHis(userNo:number){
    this.showDialog = true;

    this.uds.getUsersHis(userNo).subscribe(
      datas => {
        console.log(datas);
        this.userHisList = datas["list"];        
      },
      error =>  {
        this.errorMsg = <any>error;
        alert(this.errorMsg);
      });
  }
  getUsers():void{
    this.uds.getUsers(this.searchUser).subscribe(
      datas => {
        console.log(datas);
        this.userList = datas["list"];
      },
      error =>  {
        this.errorMsg = <any>error;
        alert(this.errorMsg);
      });
  }
  addUser(user:User):void{
    console.log(user);
    this.uds.addUser(user).subscribe(
      datas => {
        console.log(datas);
        this.userList = datas["list"];
      },
      error =>  {
        this.errorMsg = <any>error;
        alert(this.errorMsg);
      });
  }
  
  getUsers2():void{
    this.uds.getUsers(this.searchUser,'2').subscribe(
      datas => {
        console.log(datas);
        this.userList = datas["list"];
      },
      error =>  {
        this.errorMsg = <any>error;
        alert(this.errorMsg);
      });
  }
  showHideAddUserDiv():void{
    this.addUserBtnStr='Show Add User Div';
    this.addUserShow = !this.addUserShow;
    if(this.addUserShow)
    this.addUserBtnStr='Hide Add User Div';
  }
}
