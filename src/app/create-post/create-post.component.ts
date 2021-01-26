import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  test:boolean;
  username:string ;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.test = this.dataService.takeCurrent()
    this.dataService.activeUser1.subscribe(username => this.username = username);
  }

  createNewPost(theme,txt){
    this.dataService.createNewPost(theme,txt);
    console.log(this.test)
  }

  deleteAll(){
    this.dataService.deleteAll();
  }

  closeResult = '';
  
  open(content) {
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
      return `with: ${reason}`;
    }
  }
}
