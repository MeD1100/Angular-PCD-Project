import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-user',
  templateUrl: './categories-user.component.html',
  styleUrls: ['./categories-user.component.css']
})
export class CategoriesUserComponent implements OnInit {

  display1 = "none";
  display2 = "none";
  
  constructor() { }

  ngOnInit(): void {
  }

  openModal1() {
    this.display1 = "block";
  }
  onCloseHandled1() {
    this.display1 = "none";
  }
  openModal2() {
    this.display2 = "block";
  }
  onCloseHandled2() {
    this.display2 = "none";
  }

}
