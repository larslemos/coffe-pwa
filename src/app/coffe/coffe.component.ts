import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Coffe } from "../logic/Coffe";
import { GeolocationService } from "../geolocation.service";
import { TastingRating } from "../logic/TastingRating";
import { DataService } from '../data.service';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.css']
})
export class CoffeComponent implements OnInit {

  coffe: Coffe;
  tastingEnabled: Boolean
  types = ["Expresso", "Rsitretto", "Americano", "Cappucino", "Frape"];


  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private router: Router,
              private data: DataService) { }

  routingSubscription: any;

  tastingRatingChanged(checked: boolean) {
    if(checked) {
      this.coffe.tastingRating = new TastingRating();
    } else {
      this.coffe.tastingRating = null;
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  save() {
    this.data.save(this.coffe, result => {
      if(result ){
        this.router.navigate(["/"]);
      }
    });
  }

  ngOnInit() {
    this.coffe = new Coffe();
    this.routingSubscription = this.route.params.subscribe(params => {
          if(params['id']) {
            this.data.get(params['id'], response => {
              this.coffe = response;
              if(this.coffe.tastingRating)
                this.tastingEnabled = true;
            });
          }

      });

    this.geolocation.requestLocation(location => {
      if(location) {
        this.coffe.location.latitude = location.latitude;
        this.coffe.location.longitude = location.longitude;
      }
    });

  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
