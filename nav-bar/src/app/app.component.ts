import { Component } from '@angular/core';
import { NavMenuComponent, initNav ,getIteams } from './nav-menu/nav-menu.component';
//import {initNav} from  ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  iteams = getIteams();

  }
//NavMenuComponent jyy = new NavMenuComponent ;
