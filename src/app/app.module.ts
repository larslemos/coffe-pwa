
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeolocationService } from "./geolocation.service";
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
          MatToolbarModule, MatCardModule, MatSlideToggleModule } from "@angular/material";

import 'hammerjs';
import { ListComponent } from './list/list.component';
import { CoffeComponent } from './coffe/coffe.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

const routes : Routes = [
    { path: '', component: ListComponent },
    { path: 'coffe', component: CoffeComponent },
    { path: 'coffe/:id', component: CoffeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, HttpModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
    MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule,

  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
