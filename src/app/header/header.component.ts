import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string ;


  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.getUserName();
    this.dataService.activeUser1.subscribe(username => this.username = username)
  }

  currentFalse(){
    this.dataService.currentTrue();
    console.log(this.dataService.takeCurrent())
  }
  getUserName(){
  // this.username = this.dataService.getUserName(0);
  }
}
