import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'editJelo',
  templateUrl: `./editJelo.component.html`,
})

export class EditKonkretnoJelo  { 

  http: Http;
  router: Router;
  postResponse: Response;
  route: ActivatedRoute;
  data: Object[];
  private nazivJela = '';
  private cena = '';

  constructor(route: ActivatedRoute, http: Http, router: Router) {
    this.http = http;
    this.router = router;
    this.route = route;
    if(localStorage.getItem('token') == null){
      this.router.navigate(['']);
    }
  }
 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append("token",localStorage.getItem("token"));
      this.http.get('http://localhost:8888/phpMima/citajSamoJednoJelo.php?id='+id,{headers:headers}).map(res => res.json()).share()
        .subscribe(data => {
            this.data = data.data;
            this.nazivJela =  data.data.nazivJela;
            this.cena = data.data.cena;

          },
          err => {
            this.router.navigate(['']);
          }
        );
    });
  }

    onEdit(): void {
  	  this.route.params.subscribe((params: Params) => {
	      let id = params['id'];
	      let headers = new Headers();
	      var data = "id=" + id + "&nazivJela=" + this.nazivJela + "&cena=" + this.cena;
	      headers.append('Content-Type', 'application/x-www-form-urlencoded');
	      headers.append("token",localStorage.getItem("token"));
	      this.http.post('http://localhost:8888/phpMima/izmeniJelo.php', data, { headers: headers })
	      .map(res => res)
	      .subscribe( data => this.postResponse = data,
	        err => alert(JSON.stringify(err)),() => {
	          if(this.postResponse["_body"].indexOf("error") === -1){
	            this.router.navigate(['']);
	          }else{
	            alert("Niste izmenili jelo.");
	          }
	        }
	      );
	  	}
	  	);
	}


  public update() {
      
  }

}