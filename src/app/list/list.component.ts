import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Coffe } from "../logic/Coffe";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: [Coffe]

  constructor(private data: DataService,
              private router: Router) { }

  goDetails(coffe: Coffe) {
        this.router.navigate(['/coffe', coffe._id]);
  }

  ngOnInit() {
      this.data.getList(list => {
          this.list = list;
      })
  }


}
