import { Injectable } from '@angular/core';
import { Coffe } from "./logic/Coffe";
import { PlaceLocation } from "./logic/PlaceLocation";

@Injectable()
export class DataService {

  constructor() { }

  getList(callback) {
    const list = [
        new Coffe("Double Espresso", "Suny Cafe",
          new PlaceLocation("123 Market St", "San F rancisco")),
        new Coffe("Caramel Americano", "Starcoffe",
          new PlaceLocation("Gran Via 34", "Madrid"))
    ];
    callback(list);
  }

  save(coffe, callback) {
      callback(true);
  }

}
