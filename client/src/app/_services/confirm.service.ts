import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../modals/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  confirm(
    title = 'Confirmation',
    message = 'Are you sure you want to do this?',
    btnOkText = 'Ok',
    btnCancelText = 'Cancel'
  ): Observable<boolean> {
    const config = {
      initialState: {
        title,
        message,
        btnOkText,
        btnCancelText,
      },
    };

    this.bsModalRef = this.modalService.show(ConfirmDialogComponent, config);

    // return an Observable that holds a boolean value - whether the user has confirmed or not
    return new Observable<boolean>(this.getResult());
  }

  private getResult() {
    return (observer) => {
      const subscription = this.bsModalRef.onHidden.subscribe(() => {
        observer.next(this.bsModalRef.content.result); // pass the result of user's confirmation (true or false) to the Observable
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      }
    }
  }
}
