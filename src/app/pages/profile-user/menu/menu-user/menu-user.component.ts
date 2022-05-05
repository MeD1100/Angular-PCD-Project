import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/pages/profile/menu/menu';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public MenuProperties : Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fa fa-chart-line',
    url: '',
    sousMenu:[
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fas fa-chart-pie',
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'fas fa-chart-bar',
        url: 'profile/statistiques'
      }

    ]
  },
    {
      id: '2',
      titre: 'Historique',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Cheques',
          icon: 'fas fa-boxes',
          url: 'profile-user/cheques-user'
        },
        {
          id: '22',
          titre: 'Mouvements du solde',
          icon: 'fab fa-stack-overflow',
          url: 'profile-user/mvtsld-user'
        }
      ]
    },
    {
      id: '3',
      titre: 'Infos',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Categories',
          icon: 'fas fa-tools',
          url: 'profile-user/categories-user'
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined

  navigate(menu: Menu) : void{
    if (this.lastSelectedMenu){
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url])
  }

}
