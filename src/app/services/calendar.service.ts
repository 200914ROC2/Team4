import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICalendar } from '../Interfaces/ICalendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  calendarURL = '/api/calendar';
  constructor(private http: HttpClient) { }
  getCalendar(): Observable<ICalendar[]> {
    return this.http.get<ICalendar[]>(this.calendarURL);
  }
  getCalendarByUser(userID: number): Observable<ICalendar[]> {
    return this.http.get<ICalendar[]>(this.calendarURL + '?user=' + userID);
  }
  updateCalendar(calendar:ICalendar): Observable<ICalendar> {
    console.log("updating");
    return this.http.put<ICalendar>(this.calendarURL + `/${calendar.id}`, calendar);
  }
}
