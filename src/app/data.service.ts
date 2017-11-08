import { Injectable } from '@angular/core';
import { Coffe } from "./logic/Coffe";
import { PlaceLocation } from "./logic/PlaceLocation";
import { Http } from "@angular/http";
@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://localhost:3000";

  get(coffeId: string, callback) {
    this.http.get(`${this.endpoint}/coffees/${coffeId}`)
      .subscribe(response => {
        console.log(response.json());
          callback(response.json());
      });
  }

  getList(callback) {
    // const list = [
    //     new Coffe("Double Espresso", "Suny Cafe",
    //       new PlaceLocation("123 Market St", "San F rancisco")),
    //     new Coffe("Caramel Americano", "Starcoffe",
    //       new PlaceLocation("Gran Via 34", "Madrid"))
    // ];
    // callback(list);
    this.http.get(`${this.endpoint}/coffees`)
              .subscribe(response => {
                  console.log(response.json());
                  callback(response.json());
              });
  }

  save(coffe, callback) {
      if(coffe._id) {
        //It's an update
        this.http.put(`${this.endpoint}/coffees/${coffe._id}`, coffe)
                .subscribe(response => {
                    callback(true);
                });
      } else {
        //It's an insert
        this.http.post(`${this.endpoint}/coffees`, coffe)
                .subscribe(response => {
                    callback(true);
                })
      }

  }

}
