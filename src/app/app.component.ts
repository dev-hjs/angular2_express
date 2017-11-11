import {Component} from "@angular/core";

@Component({
    selector:'my-app',
    template: require('./app.component.html'),
})
export class AppComponent{
    pageTitle : string = 'Angular2 & Express';
    title : string = 'app';
}