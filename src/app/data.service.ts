import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  current:boolean = true;

  private current1 = new BehaviorSubject<boolean>(true);
  current12 = this.current1.asObservable();

  private activeUser = new BehaviorSubject<string>('');
  activeUser1 = this.activeUser.asObservable();

  private users= [{
    name: 'admin',
    surname: 'admin',
    login: 'admin',
    password: 'admin',
    emeil: 'admin@gmail.com'
  },
  {
    name: 'user',
    surname: 'user',
    login: 'user',
    password: 'user',
    emeil: 'user@gmail.com'
  }

]

  private posts: { theme:string, txt: string, date:string, redaction: boolean }[] =
  [{theme: 'test theme', txt: 'test txt',date: 'test date', redaction: false}]


  private isActive: boolean = false;

  getUserName(n1:number):string{
    console.log( 'asdf');
    return this.users[n1].login;

  }

  getUsers(){
    return this.users;
  }

  getPosts(){
    return this.posts
  }

  createNewPost(themeNew,txtNew){
    let newPost ={
      theme: themeNew,
      txt: txtNew,
      date: new Date().toDateString(),
      redaction: false
    }
    this.posts.push(newPost)
    console.log(this.posts);
  }

  deletePost(index){
    let deleteIndex = this.posts.length - index -1;
    console.log(this.posts.splice(deleteIndex,1));
  }

  redactionActive(index){
    let newI = (this.posts.length-1) - index;
    this.posts[newI].redaction = true;
  }

  redactionNonActive(index){
    let newI = (this.posts.length-1) - index;
    this.posts[newI].redaction = false;
  }

  toRedact(themeRedact,txtRedact,index){
    let newI = (this.posts.length-1) - index;
    this.posts[newI].theme = themeRedact;
    this.posts[newI].txt = txtRedact;
  }



  createNewUser(nameNew,surnameNew,loginNew,passwordNew,emeilNew){
    let newUser = {
      name: nameNew,
      surname: surnameNew,
      login: loginNew,
      password: passwordNew,
      emeil: emeilNew
    }
    this.users.push(newUser);
  }
  constructor() { }

  takeCurrent(){
    return this.current;
  }

  currentTrue(){
   this.current1.next(true)
  }

  currentFalse(){
    this.current1.next(false)
   }

   show(){
     alert(this.current1)
   }

   getCurrent(){
     return this.current1;
   }

   activeU(name:string){
    this.activeUser.next(name)
   }

   deleteAll(){
     this.posts.length = 0;
   }
}
