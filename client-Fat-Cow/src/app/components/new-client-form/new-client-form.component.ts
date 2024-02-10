import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrl: './new-client-form.component.css'
})
export class NewClientFormComponent {

  constructor(private ClientService: ClientService) { }
  @ViewChild('clientForm') clientForm: NgForm = {} as NgForm;

  onSubmit() {
    this.ClientService.addClient(this.clientForm.value).subscribe({
      next: (response) => {
        this.clientForm.reset();
        alert('Client Added');
      },
      error: (err) => {
        console.error(err);
        alert('An error occurred while adding the client');
      }
    });
  }

}
