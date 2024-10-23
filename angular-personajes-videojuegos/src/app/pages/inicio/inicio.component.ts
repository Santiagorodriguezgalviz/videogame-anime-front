import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  featuredCharacters = [
    { name: 'Gojo Satoru', game: 'Jujutsu Kaisen: Phantom Parade', image: './assets/images/Eren.jpg' },
    { name: 'Naruto Uzumaki', game: 'Naruto Ultimate Ninja Storm', image: './assets/images/naruto-uzumaki.jpg' },
    { name: 'Tanjiro Kamado', game: 'Demon Slayer: Kimetsu no Yaiba', image: './assets/images/tanjiro-kamado.jpg' },
    // Puedes agregar más personajes según sea necesario
  ];
}
