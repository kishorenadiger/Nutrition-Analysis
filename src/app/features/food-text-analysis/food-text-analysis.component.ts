import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/shared/rest.service';

@Component({
  selector: 'app-food-text-analysis',
  templateUrl: './food-text-analysis.component.html',
  styleUrls: ['./food-text-analysis.component.sass']
})
export class FoodTextAnalysisComponent implements OnInit {
  public ingr;
  public analysedData;
  constructor( private rest : RestService) { }

  ngOnInit() {
  }
  submit(){
    let params = encodeURIComponent(this.ingr);
    console.log(params);
    
    this.rest.textRecipe(params).subscribe(res =>{
      this.analysedData = res;
    })
  
    }
  
}
