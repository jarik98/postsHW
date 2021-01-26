import { Component,ViewChild, OnInit,AfterViewInit } from '@angular/core';

import { NgbModalConfig, NgbModal, NgbActiveModal, NgbModalRef,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  name0:boolean = true;
  surname0:boolean = true;
  login0:boolean = true;
  password0:boolean = true;
  passwordAgain0:boolean = true;
  emeil0:boolean = true;

  current:boolean = true;
  users: any;

  passwordFalse: boolean = true;
  @ViewChild('content') content;


  constructor(config: NgbModalConfig, private modalService: NgbModal, private activeModal: NgbActiveModal, public dataService: DataService) {
    // disable closing
    config.backdrop = 'static';
    config.keyboard = false;
   }



  ngOnInit(): void {
    // this.openModal();
    this.getUsers();
  }

  open() {
    // this.modalService.open(content);
    this.openModal();
  }

  openModal(){
    this.modalService.open(this.content, { centered: true });
  }

  // open popup after loading
  ngAfterViewInit() {
    this.openModal();
  }

  closePop(login,password){

    for (let index = 0; index < this.users.length; index++) {
      if(this.users[index].login == login){
        if(this.users[index].password == password){
          this.passwordFalse = true;
          this.dataService.currentFalse();
          this.dataService.activeU(this.users[index].login)

        this.modalService.dismissAll();
        }
      }else{this.passwordFalse = false;}

    }
  }
  openRegistration(){}

  title = 'appBootstrap';

  closeResult: string;

  open2(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  close(){
    this.activeModal.close();
  }

  test(...data){
    if(data[0]==false){
      this.name0 = false;
    }

    if(data[1]==false){
      this.surname0 = false;
    }

    if(data[2]==false){
      this.login0 = false;
    }

    if(data[3]==false){
      this.password0 = false;
    }

    if(!(data[6]==data[7])){
      this.passwordAgain0 = false;
    }

    if(data[5]==false){
      this.emeil0 = false;
    }
    
  }

  getUsers(){
    this.users = this.dataService.getUsers()
  }

  makeNewUser(...data){
    this.dataService.createNewUser(data[0],data[1],data[2],data[3],data[4]);
    console.log(this.dataService.getUsers().length)
  }

}

