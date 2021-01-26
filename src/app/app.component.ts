import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dataService: DataService){}
  title = 'dz11';
  current:boolean ;

  ngOnInit(): void {
    // this.current = this.dataService.takeCurrent();
    this.dataService.current12.subscribe(current => this.current = current)
  }
}
