import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
      titre: 'Cheques',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Cheques',
          icon: 'fas fa-boxes',
          url: 'profile/cheques'
        },
        {
          id: '22',
          titre: 'Mouvements du solde',
          icon: 'fab fa-stack-overflow',
          url: 'profile/mvtsld'
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fas fa-users',
          url: 'profile/clients'
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fas fa-shopping-basket',
          url: 'profile/clientcmd'
        }
      ]
    },
    {
      id: '4',
      titre: 'Admins',
      icon: 'fas fa-users-cog',
      url: 'profile/admins',
      sousMenu: [
        {
          id: '41',
          titre: 'Administrateurs',
          icon: 'fas fa-users-cog',
          url: 'profile/admins'
        }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'fas fa-tools',
          url: 'profile/categories'
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu) : void{
    if (this.lastSelectedMenu){
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url])
  }

}
