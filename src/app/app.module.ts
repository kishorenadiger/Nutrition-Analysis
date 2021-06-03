import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { FullRecipeAnalysisComponent } from './features/full-recipe-analysis/full-recipe-analysis.component';
import { FoodTextAnalysisComponent } from './features/food-text-analysis/food-text-analysis.component';
import { RestService } from './shared/rest.service';
import { DisplayComponentComponent } from './shared/display-component/display-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FullRecipeAnalysisComponent,
    FoodTextAnalysisComponent,
    DisplayComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
