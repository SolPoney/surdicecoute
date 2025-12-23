import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './accueil.component.html',
  styles: [`
    .action-button {
      display: block;
      padding: 24px;
      background-color: #1f2937;
      color: #f3f4f6;
      text-decoration: none;
      border: 3px solid #374151;
      transition: none;
    }
    .action-button:hover, .action-button:focus {
      background-color: #374151;
      border-color: #fbbf24;
    }
  `]
})
export class AccueilComponent {}
