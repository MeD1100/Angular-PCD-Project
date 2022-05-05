import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() :void{
    this.ngxLoader.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxLoader.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 2000);
  }
}
