import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {RouterLink, RouterOutlet} from '@angular/router';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {NgIf} from '@angular/common';
import {Projet} from '../../models/projet.model';
import {ProjetService} from '../../services/projet.service';
import {TatoueurService} from '../../services/tatoueur.service';
@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [ RouterLink, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef, MatCellDef, MatHeaderCellDef,
    NgIf],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de tatoueurs
  projets: Projet[] = [];
  displayedColumns: string[] = ['nom', 'description','tatoueur','action'];

  constructor(private auth: AuthService, private projetService: ProjetService,private tatoueurService:TatoueurService) {
  }

  authenticated() {
    return this.auth.authenticated;
  }

//Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du tatoueurService.
    this.projetService.getProjets().subscribe((data: Projet[]) => {
//Mets les données dans notre variable de classe tatoueurs
      this.projets = data;
    });
  }


  deleteProjet(id: number) {
    this.projetService.delete(id).subscribe(res => {
      this.projets= this.projets.filter(item => item.id !== id);
    })
  }
}
