import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-test',
  template: require('./function-test.component.html')
})
export class FunctionTestComponent implements OnInit {
  private title:string = "함수 테스트"
  constructor() { }

  ngOnInit() {
  }
  
  testFunctionDeclarartion(){
    test();
    function test():void{
      alert(1);
    }
  }
  
    tesAnonymoustExpression(){
      let test;
      try{
        test();
        test = function(){
          alert(2);
        } 
      }catch(e){
        alert(e);
        test = function(){
          alert(2);
        }
      }
      test();
    }
    
    testNamedFunction(){
        let test;
        try{
          test();
        }catch(e){
          alert(e);
          test = function test2(){
            alert(2);
          }
        }
        test();
      }
}
