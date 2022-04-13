import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-admin',
  templateUrl: './nouveau-admin.component.html',
  styleUrls: ['./nouveau-admin.component.css']
})
export class NouveauAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['profile/admins']);
  }
}
