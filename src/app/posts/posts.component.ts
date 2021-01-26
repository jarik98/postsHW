import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  username:string ;

  posts:{ theme:string, txt: string, date:string,redaction:boolean }[];
  constructor(private dataService: DataService) {
    this.dataService.activeUser1.subscribe(username => this.username = username);
  }

  ngOnInit(): void {
    this.posts = this.dataService.getPosts();
  }

  redactionMake(index){
    this.dataService.redactionActive(index)
  }

  redaction(theme,txt,i){
    this.dataService.toRedact(theme,txt,i);
    this.dataService.redactionNonActive(i)
  }

  deletePost(i){
    this.dataService.deletePost(i)
  }

}
