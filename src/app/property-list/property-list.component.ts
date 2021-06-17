import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})


export class PropertyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  properties: Array<any> =[
  {"id":10, "Name":"Birla housing","Type":"2BHK","Rent":15000},
  {"id":100, "Name":"Ashish housing","Type":"2BHK","Rent":91000}
]


}
