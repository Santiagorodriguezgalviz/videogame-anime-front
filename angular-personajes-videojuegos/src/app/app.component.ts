import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardAnimeComponent } from './pages/dashboard-anime/dashboard-anime.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, DashboardAnimeComponent, DashboardComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personajes-videojuegos';
}