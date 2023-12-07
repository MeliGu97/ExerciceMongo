import { Component,OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiants',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [EtudiantService],
  templateUrl: './etudiants.component.html',
  styleUrl: './etudiants.component.scss'
})
export class EtudiantsComponent implements OnInit {
  etudiants: any = [];
  nouvelEtudiant: any = {};

  constructor(private etudiantService: EtudiantService) { }
 
  ngOnInit() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }

  ajouterEtudiant(): void {
    this.etudiantService.addEtudiant(this.nouvelEtudiant).subscribe({
      next: etudiantAjoute => {
        console.log('Étudiant ajouté avec succès', etudiantAjoute);
        this.etudiants.push(etudiantAjoute);
        this.nouvelEtudiant = {};  // Met à zéro le formulaire après l'ajout
      },
      error: error => {
        console.error('Erreur lors de l\'ajout d\'un étudiant', error);
      }
    });
  }


  // Dans le composant Angular
supprimerEtudiantParId(id: string): void {
  this.etudiantService.deleteEtudiant(id.toString()).subscribe({
    next: () => {
      console.log('Étudiant supprimé avec succès');
    },
    error: (error) => {
      console.error('Erreur lors de la suppression de l\'étudiant', error);
    }
  });
}


}