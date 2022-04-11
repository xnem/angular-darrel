export class ApiConst {

    static readonly PATH_API_ROOT = 'http://localhost:8000/';

    // 全ドライバー情報の取得
    static readonly PATH_API_GET_DRIVERS = 'v1/drivers';
    // 特定のドライバー情報の取得
    static readonly PATH_API_GET_DRIVER = 'v1/drivers/:id';
    // 特定のドライバー情報の更新
    static readonly PATH_API_PUT_DRIVER = 'v1/drivers/:id';
    // 特定のドライバー情報の削除
    static readonly PATH_API_DELETE_DRIVER = 'v1/drivers/:id';
    // 新規ドライバー情報の作成
    static readonly PATH_API_POST_DRIVER = 'v1/drivers';

    // 全料金計算履歴の取得
    static readonly PATH_API_GET_HISTORIES = 'v1/histories';
    // 特定の料金計算履歴に紐づく料金計算履歴詳細の取得
    static readonly PATH_API_GET_HISTORY_DETAILS = 'v1/histories/:id/details';
    // 料金計算履歴の作成
    static readonly PATH_API_POST_HISTORY = 'v1/histories';
    // 特定の料金計算履歴に紐づく料金計算履歴詳細の作成
    static readonly PATH_API_POST_HISTORY_DETAILS = 'v1/histories/:id';

    // 料金計算
    static readonly PATH_API_CALCULATE = 'v1/calculate';
}
