import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Marker} from '../models/marker.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {
  public baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  getMarkers(): Observable<Marker[]> {
    return this.http.get<Marker[]>(`${this.baseApiUrl}/marker`).pipe(
      map((markers: Marker[]) => markers.map((marker: Marker) => new Marker(marker)))
    );
  }

  saveColor(marker: Marker): Observable<Marker[]> {
    return this.http.post<Marker[]>(`${this.baseApiUrl}/marker`, marker).pipe(
      map((markers: Marker[]) => markers.map((color: Marker) => new Marker(color)))
    );
  }
}
