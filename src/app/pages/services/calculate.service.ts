import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConst } from '../constants/api-const';
import { Calculate } from '../models/calculate';
import { CalculationHistoryDetail } from '../models/calculation-history-detail';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private http: HttpClient) { }

  calculate(calculateModel: Calculate): Observable<CalculationHistoryDetail[]> {

    return this.http.post<CalculationHistoryDetail[]>(ApiConst.PATH_API_ROOT + ApiConst.PATH_API_CALCULATE, calculateModel);
  }
}
