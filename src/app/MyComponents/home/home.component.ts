import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "Welcome to angular!";
  isActive = true;
  todayDate = new Date();
  jsonVal = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };

  months = ["January", "Feburary", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  todaydate: Date | undefined;
  componentProperty: String | undefined;
  componentProperty2: String | undefined;

  public personData = [];

  constructor(private myservice: MyserviceService){}

  ngOnInit(){
    this.todayDate = this.myservice.showTodayDate();
    this.myservice.serviceProperty = "Component created";
    this.componentProperty = this.myservice.serviceProperty;
    this.componentProperty2 = this.myservice.serviceProperty2;

    // Populating the personData 
    // this.myservice.getData().subscribe((data)=>{
    //   this.personData = Array.from(Object.keys(data), k=>data[k]);
    //   console.log(this.personData);
    // })
  }

  buttonClickFunction(event: any) {
    this.isActive = !this.isActive;
    console.log(event);
  }

  monthsChangedFunction(event: any) {
    alert("Changed month from the dropdown");
    console.log(event);
  }

  changeServiceProperyButtonClick(event: any){
    this.myservice.serviceProperty2 = "Changed the serviceProperty2 on button click from home component";
    console.log(event);
  }

}
