import { Component } from '@angular/core';
import { NasaService } from '../services/nasa-service';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [],
  templateUrl: './pagina2.html',
  styleUrls: ['./pagina2.css'],
})
export class Pagina2 {
  data: any;
  constructor(private nasa: NasaService) {}

  ngOnInit() {
    this.nasa.getApod().subscribe({
      next: (risposta) => (this.data = risposta),
      error: (err) => console.error('Errore NASA API:', err),
    });
  }
}