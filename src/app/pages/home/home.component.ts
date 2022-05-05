import { Component, OnInit} from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() :void{
    this.ngxLoader.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxLoader.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
  }

}
