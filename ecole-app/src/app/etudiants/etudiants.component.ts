import { Component,OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiants.component.html',
  styleUrl: './etudiants.component.scss'
})
export class EtudiantsComponent implements OnInit {
  etudiants: any = [];
 
  constructor(private etudiantService: EtudiantService) { }
 
  ngOnInit() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }
 }