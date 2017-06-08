import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchPipe } from './pipes/pipe';
import { SearchPipe2 } from './pipes/pipe2';
import { DodajJeloComponent } from './dodajJelo/dodajJelo.component';
import { ROUTES } from "./app.routes";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PrijavljivanjeComponent } from './prijavljivanje/prijavljivanje.component';
import { IzmenaJelaComponent } from "./izmenaJela/izmenaJela.component";
import { KonkretnoJeloComponent } from "./konkretnoJelo/konkretnoJelo.component";
import { SvaJelaComponent } from "./svaJela/svaJela.component";
import { EditKonkretnoJelo} from "./editJelo/editJelo.component";




@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SearchPipe2,
    DodajJeloComponent,
    HomeComponent,
    RegistracijaComponent,
    PrijavljivanjeComponent,
    IzmenaJelaComponent,
    KonkretnoJeloComponent,
    SvaJelaComponent,
    EditKonkretnoJelo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
