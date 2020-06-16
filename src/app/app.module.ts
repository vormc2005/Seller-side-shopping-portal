import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsItemComponent } from './items/items-list/items-item/items-item.component';
import { ReviewComponent } from './review/review.component';
import { ReviewEditComponent } from './review/review-edit/review-edit.component';
import { HeadingComponent } from './heading/heading.component';
import { ItemsDetailComponent } from './items/items-list/items-detail/items-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemsItemComponent,
    ReviewComponent,
    ReviewEditComponent,
    HeadingComponent,
    ItemsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
