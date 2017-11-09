import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Coffe } from "../logic/Coffe";
import { Router } from '@angular/router';
import { GeolocationService } from '../geolocation.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: [Coffe]

  constructor(private data: DataService,
              private router: Router,
              private geolocation: GeolocationService) { }

  goDetails(coffe: Coffe) {
        this.router.navigate(['/coffe', coffe._id]);
  }

  goMap(coffe: Coffe) {
    const mapURL = this.geolocation.getMapLink(coffe.location);
    location.href = mapURL;

  }

  share(coffe: Coffe) {
    const shareText = "'I had this coffee at ${coffe.place} and for me it's a ${coffe.rating} ";
    if('share' in navigator) {
      //Due to Typescript version, work around used
      navigator["share"]({
          title: coffe.name,
          text: shareText,
          url: window.location.href
      })
      .then(() => console.log("share"))
      .catch(() => console.log("error sharing"));
    } else {
      const shareURL = 'whatsapp://send?text=${encodeURIComponent(shareText)} ';
      location.href = shareURL;
    }
  }

  ngOnInit() {
      this.data.getList(list => {
          this.list = list;
      })
  }


}
