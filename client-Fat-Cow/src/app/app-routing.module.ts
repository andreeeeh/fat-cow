import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSaleFormComponent } from './new-sale-form/new-sale-form.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  { path: 'new-sale-form', component: NewSaleFormComponent, title: "New Sale" },
  { path: 'client', component: ClientComponent, title: "Client" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
