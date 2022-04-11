import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { History } from '../../models/history';
import { CalculationHistoryService } from '../../services/calculation-history.service';

@Component({
  selector: 'app-calculate-history',
  templateUrl: './calculate-history.component.html',
  styleUrls: ['./calculate-history.component.scss']
})
export class CalculateHistoryComponent implements OnInit {

  history: History[];
  displayedColumns = ['calculation_time', 'input_distance', 'calculated_price', 'driver_name', 'driver_surname'];
  constructor(
    private loadingService: LoadingService,
    private calculationHistoryService: CalculationHistoryService
  ) { }

  ngOnInit(): void {
    this.loadingService.startLoading();
    this.calculationHistoryService.findAll().subscribe(history => {
      console.log(history);
      this.history = history;
      this.loadingService.stopLoading();
    })
  }

}
