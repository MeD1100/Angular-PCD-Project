import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddChequeService } from 'src/app/service/chequeService/cheque.service';
import { Cheque } from '../cheque';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.css']
})
export class NouvelArticleComponent implements OnInit {

  cheque: Cheque = new Cheque();
  constructor(private addChequeService: AddChequeService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  addCheque(){
    console.log(this.cheque);
    this.addChequeService.addCheque(this.cheque).subscribe();
    this.router.navigate(['profile/articles'])
  }

}
