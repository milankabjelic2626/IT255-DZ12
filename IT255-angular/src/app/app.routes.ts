import { Routes, RouterModule } from '@angular/router';

import { DodajJeloComponent } from './dodajJelo/dodajJelo.component';
import { HomeComponent } from './home/home.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PrijavljivanjeComponent } from './prijavljivanje/prijavljivanje.component';
import { IzmenaJelaComponent } from "./izmenaJela/izmenaJela.component";
import { KonkretnoJeloComponent } from "./konkretnoJelo/konkretnoJelo.component";
import { SvaJelaComponent } from "./svaJela/svaJela.component";
import { EditKonkretnoJelo} from "./editJelo/editJelo.component";


export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dodaj', component: DodajJeloComponent },
    { path: 'reg', component: RegistracijaComponent },
    { path: 'prijavljivanje', component: PrijavljivanjeComponent },
    { path: 'izmenaJela', component: IzmenaJelaComponent },
    { path: 'konkretnoJelo/:id', component: KonkretnoJeloComponent },
    { path: 'editJelo/:id', component: EditKonkretnoJelo },
    { path: 'svaJela', component: SvaJelaComponent }
];