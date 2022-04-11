import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Calculate } from '../../models/calculate';
import { CalculationHistoryDetail } from '../../models/calculation-history-detail';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {

  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;
  calculateModel: Calculate;
  calculationResult: CalculationHistoryDetail[];
  displayedColumns = ['driver_name', 'driver_surname', 'calculated_price'];

  constructor(
    private calculateService: CalculateService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    this.importCSV(this.file);
  }

  importCSV(file: File): void {
    const reader = new FileReader();

    // https://developer.mozilla.org/ja/docs/Web/API/FileReader/onload
    reader.onload = () => {
      // https://developer.mozilla.org/ja/docs/Web/API/FileReader/result#%E4%BE%8B
      this.csvToObject(reader.result as string);
    };

    // https://developer.mozilla.org/ja/docs/Web/API/FileReader/onerror
    reader.onerror = () => {
      reader.abort();
    };

    // https://developer.mozilla.org/ja/docs/Web/API/FileReader/readAsText
    reader.readAsText(file);
  }

  csvToObject(text: string): void {

    console.log("csvToObject is called.");
    console.log(text);

    // 改行コードで行分割
    const rows = text.split(/\r\n|\n/);

    for (const row of rows) {
      if (!row) {
        continue;
      }
      
      // タブコードでセル分割
      const cells = row.split(',');

      this.calculateModel = {
        moving_distance: Number(cells[0]),
        additional_distance_unit: Number(cells[1]),
        distance_unit_price: Number(cells[2])
      }
      console.log(this.calculateModel);
    }
  }

  calculate() {
    this.loadingService.startLoading();
    this.calculateService.calculate(this.calculateModel).subscribe(calculationResult => {
      this.calculationResult = calculationResult;
      console.log(this.calculationResult);
      this.loadingService.stopLoading();
    });
  }

}
