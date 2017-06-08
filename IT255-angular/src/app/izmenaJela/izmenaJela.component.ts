import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'izmenaJela',
  templateUrl: `./izmenaJela.component.html`,
})

export class IzmenaJelaComponent { 
  http: Http;
  router: Router;
  postResponse: Response;
  route: ActivatedRoute;
  data: Object[];
  izmenaJelaForm = new FormGroup({
    nazivJela: new FormControl(),
    cena: new FormControl(),
  });

   constructor(route: ActivatedRoute, http: Http, router: Router) {
    this.http = http;
    this.router = router;
    this.route = route;
    	if(localStorage.getItem('token') == null){
      		this.router.navigate(['']);
    	}
  	}
  
  onEdit(): void {
  	  this.route.params.subscribe((params: Params) => {
	      let id = params['id'];
	      let headers = new Headers();
	      var data = "id=" + id + "&nazivJela=" + this.izmenaJelaForm.value.nazivJela + "&cena=" + this.izmenaJelaForm.value.cena;
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
}