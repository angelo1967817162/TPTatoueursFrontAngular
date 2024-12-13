import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Projet} from '../../../models/projet.model';
import {ProjetService} from '../../../services/projet.service';

@Component({
  selector: 'app-projet-view',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './projet-view.component.html',
  styleUrl: './projet-view.component.css'
})
export class ProjetViewComponent {
  projet!:Projet;
  constructor(private projetService: ProjetService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['projetId'];
    this.projetService.findById(id).subscribe((data: Projet)=>{
      this.projet = data;
    });
  }
}
