import { Routes, RouterModule } from '@angular/router';

import { DodajJeloComponent } from './dodajJelo/dodajJelo.component';
import { HomeComponent } from './home/home.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PrijavljivanjeComponent } from './prijavljivanje/prijavljivanje.component';



export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dodaj', component: DodajJeloComponent },
    { path: 'reg', component: RegistracijaComponent },
    { path: 'prijavljivanje', component: PrijavljivanjeComponent }
];