import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodTextAnalysisComponent } from './features/food-text-analysis/food-text-analysis.component';
import { FullRecipeAnalysisComponent } from './features/full-recipe-analysis/full-recipe-analysis.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'api1',
    pathMatch: 'full'
  },
  {
    path: 'api2',
    component: FullRecipeAnalysisComponent
  },
  {
    path: 'api1',
    component: FoodTextAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
