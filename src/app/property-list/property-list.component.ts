import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})


export class PropertyListComponent implements OnInit {
properties: Array<any> =[
  {
    "id":10,
    "Rent":15000
  },

]
  constructor() { }

  ngOnInit(): void {
  }




}
