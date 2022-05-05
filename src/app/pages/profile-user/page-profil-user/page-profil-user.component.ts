import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil-user',
  templateUrl: './page-profil-user.component.html',
  styleUrls: ['./page-profil-user.component.css']
})
export class PageProfilUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modifierMotDePasse():void{
    this.router.navigate(['profile-user/changer-mdp-user'])
  }

}
