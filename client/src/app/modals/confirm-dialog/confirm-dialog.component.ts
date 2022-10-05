import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
// this component repsesents a custom confirm window
export class ConfirmDialogComponent implements OnInit {
  title: string;
  message: string;
  btnOkText: string;
  btnCancelText: string;
  result: boolean; // stores the user's choice (in case the user has confirmed - 'result' holds true, otherwise - false)

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  confirm() {
    this.result = true;
    this.bsModalRef.hide();
  }

  decline() {
    this.result = false;
    this.bsModalRef.hide();
  }

}
