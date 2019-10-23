import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HotelCartComponent } from './HotelCart/HotelCart.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import { HotelCartcontainerComponent } from './hotel-cartcontainer/hotel-cartcontainer.component';




@NgModule({
  declarations: [
    AppComponent,
    HotelCartComponent,
    HotelCartcontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
