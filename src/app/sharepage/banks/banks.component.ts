import { Component, Input, OnInit } from '@angular/core';
import { BanksapiService } from 'src/app/service/banksapi.service';
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  constructor(private banksapiService: BanksapiService) { }

  ngOnInit(): void {
    this.banksapiService.getBanks().subscribe((result)=>{
      console.warn("result",result);
    });
  }

}
