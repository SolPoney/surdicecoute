import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aide',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aide.component.html',
  styles: [`
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
  `]
})
export class AideComponent {}
