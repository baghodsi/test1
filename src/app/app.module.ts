
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
//import { NgbdModalContent } from './product-dtl/modal-component';
import { HeroesComponent } from './heroes/heroes.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDtlComponent } from './product-dtl/product-dtl.component';
import { TitleListComponent } from './title-list/title-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDtlComponent } from './user-dtl/user-dtl.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()], 
  declarations: [AppComponent, HeroesComponent, TopBarComponent, SearchComponent,
    ProductListComponent, ProductDtlComponent, TitleListComponent, UserListComponent,
    UserDtlComponent],
  entryComponents: [UserDtlComponent],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
