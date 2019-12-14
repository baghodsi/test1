import { Component, OnInit, OnChanges, EventEmitter, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  inputs: ['nRecTitleId', 'sSrchTitleText'],
  outputs: ['nRecId']
})
export class ProductListComponent implements OnInit, OnChanges {
  heroes: Object;
  hero: Hero;
  bRefresh: boolean = true;
  //products = products;
  nRecTitleId = "10001";
  nRecId = new EventEmitter <string>();
  @Input() parentSubject:Subject<any>;
  private heroService: HeroService;
  
  constructor(private modalService: NgbModal){//, private modalService: NgbModal) {
    //alert("recttt" + this.nRecTitleId);
  }

  ngOnChanges(): void{
    // alert("ngOnChanges  recttt  " + this.bRefresh);
    if(this.bRefresh)
      this.heroService.getHeroes().subscribe(data => this.heroes = data);
    
  }

  ngOnInit() {
    // this.parentSubject.subscribe(event => {alert("ngOnInit parentSubject " + event);
    // });
    this.heroService.getHeroes().subscribe(
      data => this.heroes = data
    );
    //alert("recttt" + this.nRecTitleId);
  }

  getHeroes(TitleId: string): void {
     //this.heroService.getHeroes();
    // .subscribe(heroes => this.heroes = heroes);
  }

  setRecId (myId: string){
    
    this.nRecId.emit(myId);
  }

  add(name: string): void {
    //this.heroService.updateHero(this.hero);
    this.open();
  }

  delete(hero: Hero): void {
    //alert("id   " + hero.id);
    this.heroService.deleteHero(hero).subscribe(data => this.ngOnChanges());
    //document.getElementById("myNav").style.width = "25%";
  }  

  open() {
    alert("testttttt");
    //document.getElementById("myNav").style.width = "25%";
    // const modalRef = this.modalService.open(NgbdModalContent);
    // modalRef.componentInstance.name = 'World';
  }

  share() {
    window.alert('The product has been shared!');
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