import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service'; 
import { Serie } from '../Serie';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  
  selectedSerie: Serie | null = null;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
  
    this.serieService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
      this.calculateAverageSeasons();
    });
  }


  calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }


  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}