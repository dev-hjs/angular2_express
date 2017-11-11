import { Component, OnInit } from '@angular/core';
import {UserDataService} from './user-data.service';
import {User} from './user';
import {UserCss} from './user.css';

@Component({
  selector: 'app-user',
  template:require("./user.component.html"),
  providers:[UserDataService],
  styles:[':host table{border-collapse:collapse; text-align: center; margin:50px auto;}',
  ':host th,td{border: 1px solid #FFBFBF; padding: 5px;}',
  ':host th{background: #FF9673; color: #ffffff; padding: 10px;}',
  ':host input[checked]{text-align: center;}',
  ':host td>input{border: none; box-shadow:2px 2px 1px #bdbdae;}',
  ':host td>input[type="text"]{background-color: #ffdfbf; padding: 5px;}',
  ':host td>input:focus{background-color: #ffffbf;}',
  ':host td>input[type="checkbox"]{box-shadow: none;}',
  ':host /deep/ input{border: none; box-shadow:2px 2px 1px #bdbdae;}',
  ':host /deep/ input[type="text"]{background-color: #ffdfbf; padding: 5px;}',
  ':host /deep/ input:focus{background-color: #ffffbf;}',
  ':host /deep/ input[type="checkbox"]{box-shadow: none;}']
})
export class UserComponent implements OnInit {
  userList:Array<User>=[];
  searchUser:User = new User();
  errorMsg:string = '';
  addUserShow:boolean = false;
  addUserBtnStr:string='Show Add User Div';
  title:string = 'User List';
  constructor(private uds: UserDataService) { }

  ngOnInit() {
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
