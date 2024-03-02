// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  casillas: number[] = Array.from({ length: 36 }, (_, i) => i + 1);
  numeroApostado: number | undefined;
  numeroCanica: number | undefined;
  resultado: string | undefined;

  mezclarNumeros(): void {
    this.casillas.sort(() => Math.random() - 0.5);
  }

  lanzarCanica(): void {
    this.numeroCanica = Math.floor(Math.random() * this.casillas.length) + 1;
    if (this.numeroApostado === this.numeroCanica) {
      this.resultado = '¡Ganaste!';
    } else {
      this.resultado = 'Perdiste :v';
    }
  }
}
