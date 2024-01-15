import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSaleFormComponent } from './components/new-sale-form/new-sale-form.component';
import { ClientComponent } from './components/client/client.component';
import { SalesControlComponent } from './components/sales-control/sales-control.component';


const routes: Routes = [
  { path: 'new-sale-form', component: NewSaleFormComponent },
  { path: 'client', component: ClientComponent },
  { path: '', component: SalesControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
