import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cheque } from 'src/app/service-components/cheque';
import { ChequeService } from 'src/app/service-components/cheque.service';

@Component({
  selector: 'app-details-editing',
  templateUrl: './details-editing.component.html',
  styleUrls: ['./details-editing.component.css']
})
export class DetailsEditingComponent implements OnInit {

  id!: number;
  cheque!: Cheque;

  constructor(private route: ActivatedRoute,private router: Router,
    private chequeService: ChequeService) { }

  ngOnInit() {
    this.cheque = new Cheque();

    this.id = this.route.snapshot.params['id'];

    this.chequeService.getCheque(this.id)
      .subscribe(data => {
        console.log(data)
        this.cheque = data;
      })
  }

  list(){
    this.router.navigate(['profile/cheques']);
  }

}
