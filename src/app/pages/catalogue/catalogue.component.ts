import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContenuService } from '../../services/contenu.service';
import { Contenu } from '../../models/contenu.model';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogue.component.html',
  styles: [`
    .content-card {
      padding: 24px;
      background-color: #1f2937;
      border: 2px solid #374151;
      margin-bottom: 16px;
    }
    .content-card:focus-within {
      border-color: #fbbf24;
    }
    .button {
      display: inline-block;
      padding: 16px 32px;
      background-color: #1f2937;
      color: #f3f4f6;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      border: 2px solid #374151;
      cursor: pointer;
      transition: none;
    }
    .button:hover, .button:focus {
      background-color: #374151;
      border-color: #fbbf24;
    }
    .button-secondary {
      background-color: #374151;
      border-color: #4b5563;
    }
    .button-secondary:hover, .button-secondary:focus {
      background-color: #4b5563;
      border-color: #fbbf24;
    }
  `]
})
export class CatalogueComponent implements OnInit {
  contenus: Contenu[] = [];

  constructor(private contenuService: ContenuService) {}

  ngOnInit(): void {
    this.contenus = this.contenuService.getAllContenus();
  }
}
