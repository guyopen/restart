import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RESTART';
  adding_trip = false;

  newTrip={
    title:"aaaa"
  };

  trips = [{
    title:'Trip to London'
  }, {
    title:'Trip to Rome'
  }, {
    title:'Trip to Israel'
  }];

  onClick(test){
    alert('Clicked');
    console.log('button clicked!');
    this.title = test;
  }

  addTrip(){
    this.adding_trip = true;
  }
  cancelAddTrip(){
    console.log('cancelAddTrip');
    this.adding_trip = false;
    this.newTrip.title = "";
    
  }
  doAddTrip(){
    console.log('doAddTrip');
    this.trips.push(this.newTrip);
    this.newTrip = {title:""};
    this.adding_trip = false;
  }
}
