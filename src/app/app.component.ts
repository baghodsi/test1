import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDtlComponent } from './user-dtl/user-dtl.component'
import { ProductListComponent } from './product-list/product-list.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {}
  sAppTitleList = "1";
  nAppRecId = 0;
  nAppTitleId = "10001";
  nAppTitleText = "Inbox";
  //@ViewChild('child', null) private child: ProductListComponent;

  open() {
    // alert("testttttt");
    // const modalRef = this.modalService.open(UserDtlComponent);
    // modalRef.componentInstance.name = 'World';
  }
}
