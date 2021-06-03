import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  fullRecipe(body): Observable<any> {
    return this.http.post(`https://api.edamam.com/api/nutrition-details?app_id=93dfe1bc&app_key=eefe916aa8e2c8b9ec7410bca68055f3`,body,
    {
      headers: {
        "Content-Type": "application/json",
      }
    })
  }
  textRecipe(params) {
    return this.http.get(`https://api.edamam.com/api/nutrition-data?app_id=93dfe1bc&app_key=eefe916aa8e2c8b9ec7410bca68055f3&ingr=${params}`)
  }
}
