import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {TatoueurService} from '../../../services/tatoueur.service';
import {Tatoueur} from '../../../models/tatoueur.model';
@Component({
  selector: 'app-tatoueur-view',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './tatoueur-view.component.html',
  styleUrl: './tatoueur-view.component.css'
})
export class TatoueurViewComponent {
  tatoueur!:Tatoueur;
  constructor(private tatoueurService: TatoueurService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['tatoueurId'];
    this.tatoueurService.findById(id).subscribe((data: Tatoueur)=>{
      this.tatoueur = data;
    });
  }
}
