import { Component, OnInit, OnChanges, EventEmitter, Input, Inject } from '@angular/core';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../user';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';
import { UserDtlComponent } from '../user-dtl/user-dtl.component';
//import { DialogOverviewExampleDialog } from '../dialog-overview-example';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  inputs: ['nRecTitleId', 'sSrchTitleText'],
  outputs: ['nRecId']
})
export class UserListComponent implements OnInit, OnChanges {
   users: Object;
   user: User;
   bRefresh: boolean = true;
   //products = products;
   nRecTitleId = "10000";
   nRecId = new EventEmitter <string>();
   @Input() parentSubject:Subject<any>;

  constructor(private heroService: HeroService) {
    //alert("recttt" + this.nRecTitleId);
  }

  ngOnChanges(): void{
    if(this.bRefresh) {
      alert("ngOnChanges  recttt  " + this.bRefresh);
      //this.heroService.getUsers().subscribe(data => this.users = data);
    }      
  }

  ngOnInit() {
    // this.parentSubject.subscribe(event => {alert("ngOnInit parentSubject " + event);
    // });
    //this.heroService.getUsers().subscribe(data => this.users = data);
    //alert("rec ngOnInit" + this.nRecTitleId);
  }

  getHeroes(TitleId: string): void {
     //this.heroService.getHeroes();
    // .subscribe(heroes => this.heroes = heroes);
  }

  animal: string;
  name: string;

  setRecId (myId: string){
    // const dialo = this.dialog.open(UserDtlComponent, {
    //   width: '250px',
    //   data: {name: this.name, animal: this.animal}
    // });
    // alert("rec dblclick" + this.nRecTitleId);
    // const dialogRef = this.dialog.open(UserDtlComponent, {
    //   width: '250px',
    //   data: {name: this.name, animal: this.animal}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
//    this.nRecId.emit(myId);
  }

//  openDialog(): void {
    // const dialogRef = this.dialog.open(UserDtlComponent, {
    //   width: '250px',
    //   data: {name: this.name, animal: this.animal}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
//  }

  add(name: string): void {
    //this.heroService.updateHero(this.hero);
//    this.open();
  }

  delete(user: User): void {
    //alert("id   " + hero.id);
//    this.heroService.deleteHero(hero).subscribe(data => this.ngOnChanges());
    //document.getElementById("myNav").style.width = "25%";
  }  

  open(): void {
    //document.getElementById("myNav").style.width = "25%";
  }  

  share() {
//    window.alert('The product has been shared!');
  }
  refresh(){
    this.ngOnInit();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/