import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string = 'AGM project';
  latitude!: number;
  longitude!: number;
  zoom!:number;

  constructor(private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.setCurrentLocation();

    this.ngxLoader.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxLoader.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  

  // Carousel javascript


}
