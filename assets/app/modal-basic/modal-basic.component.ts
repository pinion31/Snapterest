import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.component.html'
})
export class ModalBasicComponent implements OnInit  {
  closeResult: string;
  cardForm: FormGroup;

  constructor(private modalService: NgbModal, private usersService: UsersService) {}

  ngOnInit() {
    this.cardForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      imageLink: new FormControl(null)
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  onSubmit() {
    this.usersService.addNewCard(this.cardForm.value);
    console.log('form', this.cardForm);
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
}