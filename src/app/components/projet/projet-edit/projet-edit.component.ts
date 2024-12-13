import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {Projet} from '../../../models/projet.model';
import {ProjetService} from '../../../services/projet.service';
@Component({
  selector: 'app-projet-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './projet-edit.component.html',
  styleUrl: './projet-edit.component.css'
})
export class ProjetEditComponent {
  id!:number;
  projet!:Projet;
  form!: FormGroup;
  constructor(private projetService: ProjetService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['projetId'];
    this.projetService.findById(this.id).subscribe((data: Projet)=>{
      this.projet = data;
      this.form = new FormGroup({
        nom: new FormControl(this.projet.nom, [Validators.required]),
        description: new FormControl(this.projet.description, Validators.required)
      });
    });
  }
  submit(){
    this.projetService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/projet']);
    })
  }
}
