import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrl: './new-client-form.component.css'
})
export class NewClientFormComponent {

  constructor(private ClientService: ClientService) { }

  @ViewChild('clientForm') clientForm: NgForm = {} as NgForm;

  model: Client = {
    id: null,
    name: '',
    phone: '',
    email: '',
    cep: null,
    street: '',
    num: null,
    orientation: '',
    neighborhood: '',
    city: '',
    state: '',
  }

  formSubmitted = false;

  onSubmit() {
    this.formSubmitted = true;
    if (this.clientForm.valid) {
      console.log(this.model)
      this.ClientService.addClient(this.model)
      // this.clientForm.resetForm();
    }
  }

}
