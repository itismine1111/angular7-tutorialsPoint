import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { SqrtPipe } from './pipes/app.aqrt';
import { ChangeTextDirective } from './directives/change-text.directive';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { MyserviceService } from './services/myservice.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    SqrtPipe,
    ChangeTextDirective,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
