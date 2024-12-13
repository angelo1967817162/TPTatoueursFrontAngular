import { Component } from '@angular/core';
import {TatoueurService} from '../../../services/tatoueur.service';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../models/client.model';
@Component({
  selector: 'app-client-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css'
})
export class ClientEditComponent {
  id!:number;
  client!:Client;
  form!: FormGroup;
  constructor(private clientService: ClientService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['clientId'];
    this.clientService.findById(this.id).subscribe((data: Client)=>{
      this.client = data;
      this.form = new FormGroup({
        nom: new FormControl(this.client.nom, [Validators.required]),
        telephone: new FormControl(this.client.telephone, Validators.required)
      });
    });
  }
  submit(){
    this.clientService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/client']);
    })
  }
}
