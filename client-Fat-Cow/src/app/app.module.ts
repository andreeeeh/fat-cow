import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewSaleFormComponent } from './new-sale-form/new-sale-form.component';
import { ResultComponent } from './result/result.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { NgChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';
import { ResultFlipComponent } from './result-flip/result-flip.component';

@NgModule({
  declarations: [
    AppComponent,
    NewSaleFormComponent,
    ResultComponent,
    HomeComponent,
    ClientComponent,
    GraphComponent,
    ResultFlipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
