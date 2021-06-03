import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/shared/rest.service';

@Component({
  selector: 'app-full-recipe-analysis',
  templateUrl: './full-recipe-analysis.component.html',
  styleUrls: ['./full-recipe-analysis.component.sass']
})
export class FullRecipeAnalysisComponent implements OnInit {
  public recipe ="";
  public ingr;
  public resultFlag = false;
  public analysedData;
  public errorText = '';
  constructor(public rest : RestService) { }

  ngOnInit() {
    this.rest.fullRecipe('obj').subscribe(res =>{
      console.log(res);
    })
  }

  submit(){
    let ele = this.ingr.split("\n");
    let inpObj ={}
    inpObj['title'] = this.recipe;
    inpObj['ingr'] = ele;
    this.rest.fullRecipe(inpObj).subscribe(res =>{
      this.resultFlag = true;
      this.analysedData = res;
      this.errorText = '';
    },err =>{
      console.log(err);
      
      this.errorText = err.message;
    })
  }
  
  clear(){
    this.analysedData = [];
    this.recipe= '';
    this.ingr = '';
  }

}
