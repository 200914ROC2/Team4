import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWgerde } from '../Interfaces/IWgerde';


@Injectable({
  providedIn: 'root'
})
export class ExerciseImageService {
  productURL = 'https://wger.de/api/v2/exerciseimage?limit=204';
  constructor(private http: HttpClient) { }
  getExerciseImage(): Observable<IWgerde> {
    return this.http.get<IWgerde>(this.productURL);
  }
}
