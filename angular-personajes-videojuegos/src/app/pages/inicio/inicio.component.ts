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
    { name: 'Eren Yeager', game: 'Attack on Titan', image: 'Eren.jpg' },
    { name: 'Nagisa Shiota', game: 'Assassination Classroom', image: 'Nagisa.jpg' },
    { name: 'Saitama', game: 'One Punch Man', image: 'saitama.jpg' }
  ];
}
