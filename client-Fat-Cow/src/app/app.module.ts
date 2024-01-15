import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewSaleFormComponent } from './components/new-sale-form/new-sale-form.component';
import { ResultComponent } from './components/result/result.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { NgChartsModule } from 'ng2-charts';
import { GraphComponent } from './components/graph/graph.component';
import { ResultFlipComponent } from './components/result-flip/result-flip.component';
import { SalesControlComponent } from './components/sales-control/sales-control.component';
import { NewClientFormComponent } from './components/new-client-form/new-client-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewSaleFormComponent,
    ResultComponent,
    HomeComponent,
    ClientComponent,
    GraphComponent,
    ResultFlipComponent,
    SalesControlComponent,
    NewClientFormComponent,
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
