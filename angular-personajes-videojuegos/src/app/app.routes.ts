import { Routes } from '@angular/router';
import { DashboardAnimeComponent } from './pages/dashboard-anime/dashboard-anime.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'app-dashboard-anime', component: DashboardAnimeComponent },
  { path: 'inicio', component: InicioComponent },

];
