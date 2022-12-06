import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private finalData = [];
  private apiUrl = "http://jsonplaceholder.typicode.com/users";

  serviceProperty = "Service Created!"
  serviceProperty2 = "Service Property 2!"

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.apiUrl);
  }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
