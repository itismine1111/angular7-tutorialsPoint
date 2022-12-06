import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  todayDate: Date | undefined;
  newComponentProperty: String | undefined;
  newComponentProperty2: String | undefined;
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.todayDate = this.myservice.showTodayDate();
    this.newComponentProperty = this.myservice.serviceProperty;
    this.newComponentProperty2 = this.myservice.serviceProperty2;
  }

}
