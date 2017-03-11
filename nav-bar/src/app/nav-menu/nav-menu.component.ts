import { Component, OnInit } from '@angular/core';
//import { NavItemComponent ,item } from '../nav-item/nav-item.component';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  constructor() { 
   
  }
 navItem=[{ item:"Main"}, {item:"Messages"},{item:"Notifications"},{ item:"Help"}];
  ngOnInit() {
  }

}
export function items(){
return;

}
