import { Component, Input } from "@angular/core";

@Component({selector:'app-property-card',
 // template: '<h1> Hi i am ashish </h1>',
templateUrl:'property-card.component.html' ,
styleUrls:['property-card.component.css']
})


export class PropertyCard
{
  @Input() Property : any
 //  Property:any={"id":10,"Rent":20000}
}
