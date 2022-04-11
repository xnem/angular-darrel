import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { RoutingService } from './core/services/routing.service';
import { UrlConst } from './pages/constants/url-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'darrel-angular';

  constructor(
    private routingService: RoutingService,
    private loadingService: LoadingService
  ) { }

  // アクセスしているURLからページ名を返却する
  public getPageName(): String {

    if (UrlConst.SLASH === this.routingService.router.url ||
      UrlConst.SLASH + UrlConst.PATH_MENU === this.routingService.router.url) {
      return 'メニュー';
    } else if (UrlConst.SLASH + UrlConst.PATH_DRIVER_MASTER === this.routingService.router.url) {
      return 'ドライバーマスタ　一覧';
    } else if (UrlConst.SLASH + UrlConst.PATH_DRIVER_MASTER_EDIT === this.routingService.router.url) {
      return 'ドライバーマスタ　編集';
    } else if (UrlConst.SLASH + UrlConst.PATH_CALCULATE === this.routingService.router.url) {
      return '料金計算';
    } else if (UrlConst.SLASH + UrlConst.PATH_CALCULATE_HISTORY === this.routingService.router.url) {
      return '料金計算履歴　一覧';
    } else if (UrlConst.SLASH + UrlConst.PATH_CALCULATE_HISTORY_DETAIL === this.routingService.router.url) {
      return '料金計算履歴　詳細';
    }
    return 'エラー';
  }

  // ヘッダーの家アイコンクリックでメニュー画面に遷移する
  public navigateToMenu(): void {
    this.loadingService.startLoading();
    this.routingService.navigate("menu");
    this.loadingService.stopLoading();
  }
}
