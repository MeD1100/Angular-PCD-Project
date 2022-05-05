import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-user',
  templateUrl: './articles-user.component.html',
  styleUrls: ['./articles-user.component.css']
})
export class ArticlesUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
