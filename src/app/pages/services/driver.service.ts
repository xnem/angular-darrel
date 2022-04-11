import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiConst } from '../constants/api-const';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(ApiConst.PATH_API_ROOT + ApiConst.PATH_API_GET_DRIVERS);
  }
}
