import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Client} from '../../../models/client.model';
import {ClientService} from '../../../services/client.service';
import {ProjetComponent} from '../../projet/projet.component';
@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [RouterLink, ProjetComponent],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {
  client!:Client;
  constructor(private clientService: ClientService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['clientId'];
    this.clientService.findById(id).subscribe((data: Client)=>{
      this.client = data;
    });

  }

}
