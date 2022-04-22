import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { AddChequeService } from 'src/app/service/chequeService/cheque.service';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.css']
})
export class NouveauClientComponent implements OnInit {

  client: Client = new Client();

  constructor() { }

  ngOnInit(): void {

  }

}
