import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@HostListener('window:scroll', ['$event'])

export class NavbarComponent implements OnInit {

  imageSrc="angular-frontend\src\app\images\cheque-blanc.png"
  
  constructor() { }

  ngOnInit(): void {
  }

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
