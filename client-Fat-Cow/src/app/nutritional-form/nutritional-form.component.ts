import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ServiceResultService } from '../service-result.service';
import { Product } from '../product';
import { InfoAnimal } from '../infoAnimal';
import { Result } from '../result';

@Component({
  selector: 'app-nutritional-form',
  templateUrl: './nutritional-form.component.html',
  styleUrl: './nutritional-form.component.css'
})
export class NutritionalFormComponent {
  constructor(private serveClient: ServiceResultService) { }
  @ViewChild('nutriForm') nutriForm?: NgForm;

  product: Product[] = [
    { id: 866431, name: "Proteinado Plus" },
    { id: 607860, name: "Proteinado 30" },
    { id: 607851, name: "Proteinado 40" },
    { id: 607843, name: "Proteinado 50" },
    { id: 854395, name: "Energético Plus" },
    { id: 607835, name: "Energético" },
    { id: 806510, name: "Águas" },
    { id: 992674, name: "Secas" },
    { id: 607886, name: "Altofos 40" },
    { id: 607908, name: "Altofos 65" },
    { id: 607894, name: "Altofos 90" },
    { id: 806528, name: "Reprodução" },
  ]

  model: InfoAnimal = {
    name: '',
    id: null,
    season: '',
    period: null,
    quantity: null,
    initialWeight: null,
    priceProduct: null,
    priceWeight: 240
  }
  result?: Result;

  addName(): void {
    if (this.model.id)
      this.model.name = this.product.filter((item) => item.id == this.model.id)[0].name
  };

  submitted = false;

  addRes(info: InfoAnimal): void {
    this.serveClient.addInfoAnimal(info)
      .subscribe(result => {
        console.log(result)
        this.result = result
      })
  }
  //CPEA-PR ou BR
  onSubmit() {
    if (this.nutriForm && this.nutriForm.valid) {
      this.submitted = true;
      this.model.id = Number(this.model.id);
      this.addName()
      this.model.quantity = Number(this.model.quantity);
      this.model.period = Number(this.model.period);
      this.model.initialWeight = Number(this.model.initialWeight);
      this.model.priceProduct = Number(this.model.priceProduct);
      this.model.priceWeight = Number(this.model.priceWeight);
      // console.log(typeof this.model.id);
      // console.log(this.model);
      this.addRes(this.model)
      // this.newForm();
      // this.nutriForm.resetForm();
    }
  }

  // newForm() {
  //   this.model = new InfoAnimal('', null, "rainy", null, null, null, null, 240)
  // }
}

