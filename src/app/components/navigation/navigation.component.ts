import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styles: [`
    .nav-link {
      display: block;
      padding: 14px 20px;
      background-color: #1f2937;
      color: #f3f4f6;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      border: 2px solid transparent;
      transition: none;
    }
    .nav-link:hover, .nav-link:focus {
      background-color: #374151;
      border-color: #fbbf24;
    }
    .nav-link.active {
      background-color: #374151;
      border-left: 5px solid #fbbf24;
    }
  `]
})
export class NavigationComponent {}
