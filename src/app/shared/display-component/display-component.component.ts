import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.sass']
})
export class DisplayComponentComponent implements OnInit {
 
  @Input() data = [];
  constructor() {
   }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.data['totalNutrientsKCal']) {
      this.data['totalNutrientsKCal'] =Object.entries(this.data['totalNutrientsKCal']);
    }
  }

}
