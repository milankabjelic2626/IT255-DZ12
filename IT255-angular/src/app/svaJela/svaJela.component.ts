import { Component, Directive } from '@angular/core';
import { Http,  Headers, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'svaJela',
  templateUrl: './svaJela.component.html',
})
export class SvaJelaComponent {
    router: Router;
    isAuth: String;
    currentUrl : String;

    private jela = 'http://localhost:8888/phpMima/citajSvaJela.php';
    data: Object[];
    name: String = "";
  
    ngOnInit() 
    {
        this.router.events.subscribe(event => {
            if(localStorage.getItem('token') !== null){
            this.isAuth = "yes";
            }else {
            this.isAuth = "no";
            }
        });
    }

    constructor (private http: Http, router: Router){
        this.router = router;
        this.currentUrl = '';
        this.http.get(this.jela).subscribe(
            data => {
                this.data =  JSON.parse(data["_body"]);
            },
            err => console.log(err.text()),
                () => {
                }
        );
    }
    public izbrisiJelo(event: Event, item: Number) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        this.http.get('http://localhost:8888/phpMima/izbrisiJelo.php?id='+ item, { headers: headers }).subscribe( data => {
        event.srcElement.parentElement.parentElement.remove();
        });
    }

   public citajSvaJela(id:number){
     this.router.navigateByUrl('svaJela/' + id);
   }

   public citajSamoJednoJelo(id:number){
       this.router.navigateByUrl('konkretnoJelo/' + id);
   }
   
   public izmeniJelo(id:number){
     this.router.navigateByUrl('editJelo/' + id);
   }

// Kad dodas komponente!
}

