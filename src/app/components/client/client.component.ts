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
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client.model';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef, MatCellDef, MatHeaderCellDef,
    NgIf],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
//Variable de classe qui contiendra notre tableau de tatoueurs
  clients:Client[]=[];
  displayedColumns: any[] = ['nom', 'telephone','action'];
  constructor(private auth: AuthService,private clientService: ClientService) { }
  authenticated() { return this.auth.authenticated; }
//Fonction exécutée à l'initiation du component
  ngOnInit():void{
//Récupère les données du tatoueurService.
    this.clientService.getClients().subscribe((data:Client[])=> {
//Mets les données dans notre variable de classe tatoueurs
      this.clients = data;
    });
  }
  deleteClient(id:number){
    this.clientService.delete(id).subscribe(res => {
      this.clients = this.clients.filter(item => item.id !== id);
    })
  }
}
