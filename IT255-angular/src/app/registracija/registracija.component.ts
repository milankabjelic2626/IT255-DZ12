import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'registracija',
  templateUrl: `./registracija.component.html`,
})

export class RegistracijaComponent {
 
  http: Http;
  router: Router;
  registracijaForm = new FormGroup({
    korisnickoIme: new FormControl(),
    lozinka: new FormControl(),
    ime: new FormControl(),
    prezime: new FormControl()
  });
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
 
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['']);
    }
 
  }
  onRegistracija(): void {
    let data = "korisnickoIme="+this.registracijaForm.value.korisnickoIme+"&lozinka="+this.registracijaForm.value.lozinka+"&ime="+this.registracijaForm.value.ime+"&prezime="+this.registracijaForm.value.prezime;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:8888/phpMima/registracija.php',data, {headers:headers})
      .map(res => res)
      .subscribe( data => {
      	console.log(data);
          let obj = JSON.parse(data["_body"]);
          localStorage.setItem('token', obj.token);
          this.router.navigate(['']);
       },
        err => {
          let obj = JSON.parse(err._body);
          let element  = <HTMLElement> document.getElementsByClassName("alert")[0];
          element.style.display = "block";
          element.innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
        }
      );
  }
}