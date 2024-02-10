import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResultService } from '../../services/result.service';
import { ClientService } from '../../services/client.service';
import { Product } from '../../interfaces/product';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-new-sale-form',
  templateUrl: './new-sale-form.component.html',
  styleUrl: './new-sale-form.component.css'
})
export class NewSaleFormComponent {

  constructor(private ResultService: ResultService,
    private ClientService: ClientService) { }

  @ViewChild('nutriForm') nutriForm: NgForm = {} as NgForm;
  product: Product[] = [
    { prodId: 866431, name: "Proteinado Plus" },
    { prodId: 607860, name: "Proteinado 30" },
    { prodId: 607851, name: "Proteinado 40" },
    { prodId: 607843, name: "Proteinado 50" },
    { prodId: 854395, name: "Energético Plus" },
    { prodId: 607835, name: "Energético" },
    { prodId: 806510, name: "Águas" },
    { prodId: 992674, name: "Secas" },
    { prodId: 607886, name: "Altofos 40" },
    { prodId: 607908, name: "Altofos 65" },
    { prodId: 607894, name: "Altofos 90" },
    { prodId: 806528, name: "Reprodução" },
  ]
  clients: Client[] = [];

  ngOnInit(): void {
    this.ClientService.getClientsList();
    this.ClientService.clients$.subscribe(res => this.clients = res)
  }


  onSubmit() {
    this.addName();
    this.nutriForm.value.clientId = Number(this.nutriForm.value.clientId);
    this.nutriForm.value.prodId = Number(this.nutriForm.value.prodId);
    this.ResultService.getNutriResult(this.nutriForm.value)
    // this.nutriForm.resetForm();
  }

  addName(): void {
    if (this.nutriForm.value.prodId)
      this.nutriForm.value.name = this.product.filter((item) => item.prodId == this.nutriForm.value.prodId)[0].name
  }

}

