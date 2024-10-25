import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListarComponent } from './series-listar/series-listar.component';

@NgModule({
  declarations: [SeriesListarComponent],  
  imports: [CommonModule],
  exports: [SeriesListarComponent]  
})
export class SeriesModule { }