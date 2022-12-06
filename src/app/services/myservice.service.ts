import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceProperty = "Service Created!"
  serviceProperty2 = "Service Property 2!"

  constructor() { }

  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
}
