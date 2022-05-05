import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mdp-user',
  templateUrl: './changer-mdp-user.component.html',
  styleUrls: ['./changer-mdp-user.component.css']
})
export class ChangerMdpUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveClick(): void{
  }

  cancelClick(): void{
    this.router.navigate(['profile-user/page-user']);
  }

}
