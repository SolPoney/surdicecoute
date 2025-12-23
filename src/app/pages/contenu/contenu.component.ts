import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContenuService } from '../../services/contenu.service';
import { Contenu } from '../../models/contenu.model';

@Component({
  selector: 'app-contenu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contenu.component.html',
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
    .audio-controls {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 24px;
      padding: 24px;
      background-color: #1f2937;
      border: 2px solid #374151;
    }
  `]
})
export class ContenuComponent implements OnInit {
  contenu?: Contenu;
  isPlaying = false;
  isPaused = false;
  currentTime = 0;
  totalTime = 300;

  constructor(
    private route: ActivatedRoute,
    private contenuService: ContenuService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.contenu = this.contenuService.getContenuById(id);
      if (this.contenu?.duree) {
        const [min, sec] = this.contenu.duree.split(':').map(Number);
        this.totalTime = min * 60 + sec;
      }
    });
  }

  play(): void {
    this.isPlaying = true;
    this.isPaused = false;
  }

  pause(): void {
    this.isPaused = true;
  }

  stop(): void {
    this.isPlaying = false;
    this.isPaused = false;
    this.currentTime = 0;
  }

  formatTime(seconds: number): string {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }
}
