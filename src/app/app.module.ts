import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PropertyCard } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PropertyCard,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
