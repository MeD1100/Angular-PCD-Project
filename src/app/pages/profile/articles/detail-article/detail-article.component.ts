import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cheque } from 'src/app/service-components/cheque';
import { ChequeService } from 'src/app/service-components/cheque.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  cheques!: Observable<Cheque[]>

  constructor(private chequeService: ChequeService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.cheques = this.chequeService.getChequesList();
  }

  deleteCheque(id: number){
    this.chequeService.deleteCheque(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        })
  }

  chequeDetails(id: number){ //Nkamelha hedhi o nsnaa page details
    this.router.navigate(['profile/details', id]); // hedhi nzid naamelha children f west children profile/cheques/details/id yaani
  }

  updateCheque(id: number){ // hedhi navi lel page mtee update el component eli zedt'ha jdida ellouta
    this.router.navigate(['profile/update', id]);
  }


}
