import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/service-components/cheque';
import { ChequeService } from 'src/app/service-components/cheque.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.css']
})
export class NouvelArticleComponent implements OnInit {

  cheque: Cheque = new Cheque();
  submitted = false;

  constructor(private chequeService: ChequeService,
    private router: Router) { }

  ngOnInit() {
  }

  newCheque(): void {
    this.submitted = false;
    this.cheque = new Cheque();
  }

  save() {
    this.chequeService
    .createCheque(this.cheque).subscribe( data => {
      console.log(data)
      this.cheque = new Cheque();
      this.gotoList();
    })
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/profile/cheques']);
  }

}
