import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConst } from '../constants/api-const';
import { History } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class CalculationHistoryService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<History[]> {
    return this.http.get<History[]>(ApiConst.PATH_API_ROOT + ApiConst.PATH_API_GET_HISTORIES);
  }
}
