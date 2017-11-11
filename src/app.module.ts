import './polyfills';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app/app.component';
import {enableProdMode} from '@angular/core';
import{AppRoutingModule, RoutingComponents}from './app-routing.module';

enableProdMode();

@NgModule({
    imports: [BrowserModule,
              AppRoutingModule,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent,
              RoutingComponents],
    //providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}