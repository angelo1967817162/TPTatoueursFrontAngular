import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {ProjetService} from '../../../services/projet.service';

@Component({
  selector: 'app-projet-create',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField,
    MatInput, MatLabel],
  templateUrl: './projet-create.component.html',
  styleUrl: './projet-create.component.css'
})
export class ProjetCreateComponent {
  form!: FormGroup;
  constructor(private projetService: ProjetService, private router: Router ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    });
  }
  submit(){
    this.projetService.addProjets(this.form.value).subscribe((res:any) => {
      this.router.navigate(['/projet']);
    })
  }
}
