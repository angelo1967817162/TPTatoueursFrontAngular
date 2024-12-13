import { Routes } from '@angular/router';
import {TatoueurComponent} from './components/tatoueur/tatoueur.component';
import {LoginComponent} from './components/login/login.component';
import {TatoueurViewComponent} from './components/tatoueur/tatoueur-view/tatoueur-view.component';
import {TatoueurCreateComponent} from './components/tatoueur/tatoueur-create/tatoueur-create.component';
import {TatoueurEditComponent} from './components/tatoueur/tatoueur-edit/tatoueur-edit.component';
import {ClientViewComponent} from './components/client/client-view/client-view.component';
import {ClientComponent} from './components/client/client.component';
import {ClientCreateComponent} from './components/client/client-create/client-create.component';
import {ClientEditComponent} from './components/client/client-edit/client-edit.component';
import {ProjetComponent} from './components/projet/projet.component';
import {ProjetViewComponent} from './components/projet/projet-view/projet-view.component';
import {ProjetCreateComponent} from './components/projet/projet-create/projet-create.component';
import {ProjetEditComponent} from './components/projet/projet-edit/projet-edit.component';
export const routes: Routes = [
  {
    path: 'tatoueur',
    title: 'Nos tatoueur',
    component: TatoueurComponent,
  },
  {
    path: 'tatoueur/:tatoueurId/view',
    component: TatoueurViewComponent
  },
  {
    path: 'tatoueur/create',
    component: TatoueurCreateComponent
  },
  {
    path: 'tatoueur/:tatoueurId/edit',
    component: TatoueurEditComponent
  },
  {
    path: 'login',
    title: 'Se connecter',
    component: LoginComponent,
  },
  {
    path: 'client',
    title: 'Nos client',
    component: ClientComponent,
  },
  {
    path: 'client/:clientId/view',
    component: ClientViewComponent
  },
  {
    path: 'client/create',
    component: ClientCreateComponent
  },
  {
    path: 'client/:clientId/edit',
    component: ClientEditComponent
  },
  {
    path: 'projet',
    title: 'Nos projet',
    component: ProjetComponent,
  },
  {
    path: 'projet/:projetId/view',
    component: ProjetViewComponent
  },
  {
    path: 'projet/create',
    component: ProjetCreateComponent
  },
  {
    path: 'projet/:projetId/edit',
    component: ProjetEditComponent
  },
];
