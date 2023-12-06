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
      console.log("data", data);
      this.etudiants = data;
    });
  }
  ajouterEtudiant(): void {
    this.etudiantService.addEtudiant(this.nouvelEtudiant).subscribe((etudiantAjoute: any) => {
        this.etudiants.push(etudiantAjoute);
        this.nouvelEtudiant = {};  // met a zero le formulaire après l'ajout
    });
  }
 }