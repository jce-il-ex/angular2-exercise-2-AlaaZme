import { Component, OnInit } from '@angular/core';
import { NavItemComponent , iteams } from '../nav-item/nav-item.component';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {
  }

}
export function getIteams(){
return  iteams();

}
export function initNav(){
  return ["asd","asdsad"];
}

