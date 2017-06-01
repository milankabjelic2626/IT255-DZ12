import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
 
@Component({
  selector: 'DodajJeloComponent',
  templateUrl: './dodajJelo.component.html'
})
 
export class DodajJeloComponent {
 
  http: Http;
  router: Router;
  postResponse: String;
  dodajJeloForm = new FormGroup({
    nazivJela: new FormControl(),
    cena: new FormControl()
  });
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
 
  }
  onDodajJelo(): void {
    var data = "nazivjela=" + this.dodajJeloForm.value.nazivJela +  "&cena=" + this.dodajJeloForm.value.cena;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:8888/upis.php', data, { headers: headers })
      .subscribe(
      data => {
        if (data["_body"] == "ok") {
          this.router.navigate(['']);
        }
      }
      );
  }
}