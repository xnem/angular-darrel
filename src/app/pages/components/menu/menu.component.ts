import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private routingService: RoutingService,
    private loadingService: LoadingService
  ) { }
  
  menus = [
    {
      seq: 1,
      name: 'ドライバーマスタ'
    },
    {
      seq: 2,
      name: '料金計算'
    },
    {
      seq: 3,
      name: '料金計算履歴'
    }
  ];

  ngOnInit(): void {
  }

  navigateMenu(seq: number): void {
    this.loadingService.startLoading();

    switch (seq) {
      case 1:
        this.routingService.navigate("driver-master");
        this.loadingService.stopLoading();
        break;
      case 2:
        this.routingService.navigate("calculate");
        this.loadingService.stopLoading();
        break;
      case 3:
        this.routingService.navigate("calculate-history");
        this.loadingService.stopLoading();
        break;
    }
  }
  
}
