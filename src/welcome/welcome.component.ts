import {Component} from "@angular/core";
import { Router } from '@angular/router';
import {User} from '../app/user/user';
import {LoginService} from './login.service';
 
@Component({
    selector:'welcome',
    template: require('./welcome.component.html'),
    providers:[LoginService]
}) 
 
export class WelcomeComponent{
    title:string="User Login";
    loading:boolean = false;
    user:User = new User();
    loginUser:User;
    loadingImg:string = require('../assets/loading.gif');
    errorMsg : string;
 
    constructor(private router: Router, private ls:LoginService){
    }
    isLogin():boolean{
        return localStorage.getItem('login')==='true';
    }
    getItem(param:string):string{
        return localStorage.getItem(param);
    }
    
    logout():void{
        localStorage.clear();
    }
    login():void {
        this.loading = true;
        console.log(this.user);
        this.ls.login(this.user)
        .subscribe(
            datas => {
                if(datas['error']){
                    alert(datas['error']);
                    return;
                }
                if(datas["list"]){
                    this.loginUser = datas["list"][0];
                    localStorage.setItem('userId', this.loginUser.userId);
                    localStorage.setItem('userPwd', this.loginUser.userPwd);
                    localStorage.setItem('userName', this.loginUser.userName);
                    localStorage.setItem('userNo', this.loginUser.userNo+'');
                    localStorage.setItem('complete', this.loginUser.complete+'');
                    localStorage.setItem('token', this.loginUser.token);
                    localStorage.setItem('login','true');
                    alert(this.loginUser.userName + "님 환영합니다.")
                }
 
            },
            error =>  {
                this.errorMsg = <any>error;
                alert(this.errorMsg);
            },
            () =>{
                this.loading = false;
            }
        )
    }
}