import { Component, OnInit } from '@angular/core';
import {ProLog} from './pro-log';
 
@Component({
  selector: 'app-promise-test',
  template: require('./promise-test.component.html')
})
export class PromiseTestComponent implements OnInit {
    private title:string;
    logList:ProLog[];

    constructor() { 
        this.title = '동기/비동기테스트';
        this.initLog();
    }

    private setLog(text:string){
        let log:ProLog = new ProLog();
        log.num = this.logList.length+1;
        log.text = text;
        this.logList.push(log);
    }
    private initLog(){
        this.logList = [];
    }
    ngOnInit() {
    }
  
    num : number = 0;
    setTime(text:string,time:number,func?:Function):void{
        setTimeout(()=>{
            this.setLog(text);
            if(func){
                func();
            }
        },time);
    }

    getPromise(text:string,time:number,errorMsg?:string):Promise<{}>{
        return new Promise((resolved,rejected)=>{  
            setTimeout(()=>{
                    if(errorMsg){
                        rejected(errorMsg);
                    }else{
                        this.setLog(text);
                        resolved();
                    }
                },2000);    
        });
    }
    testAsync():void{
        this.initLog();
        let test1 = ():void =>{
            this.setTime('test1',2000);
        }
        let test2 = ():void =>{
            this.setTime('test2',1000);
        }
        let printLog = ():void =>{
            this.setLog("test1 and test2 done");
        }
        test1();
        test2();
        printLog();
    }

    testSync():void{
        this.initLog();
        let test1= (func:Function) : void =>{
            this.setTime('test1',2000,func);
        }
        let test2= (func:Function) : void =>{
            this.setTime('test2',1000,func);
        }
        let printLog = () : void =>{
            this.setLog("test1 and test2 done");
        }
        test1(test2.bind(null, printLog));
    }

    testPromise():void{
        this.initLog();
        let test1 = this.getPromise.bind(this,'test1',2000);
        let test2 = this.getPromise.bind(this,'test2',1000,'test2Error');
        let test3 = this.getPromise.bind(this,'test3',1000);
        let test4= () :void =>{
            this.setLog('test4');
        }
        let printLog = () => {
            this.setLog("test1 and test2 done");
        }

        test1()
        .then(test2)
        .then(printLog)
        .catch( 
            (result:string)=>{
                this.setLog(result);
            }
        )
        .then(test3).
        then(function(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    test4();
                    resolve();
                },1000);
            })
        })
        .then(printLog)
        .catch(
            (result:string)=>{
                this.setLog(result);
            }
        );
    }
}