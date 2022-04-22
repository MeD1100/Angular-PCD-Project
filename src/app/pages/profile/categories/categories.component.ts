import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  display1 = "none";
  display2 = "none";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  nouvelleCategorie() :void{
    this.router.navigate(['profile/nouvellecategorie']);
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
