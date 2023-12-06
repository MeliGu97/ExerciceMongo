import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';

export const routes: Routes = [
  { path: 'etudiants', component: EtudiantsComponent },
  // Ajoutez d'autres routes si nécessaire
  { path: '', redirectTo: '/etudiants', pathMatch: 'full' } // Redirection par défaut vers /etudiants
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
