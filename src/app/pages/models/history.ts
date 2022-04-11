import { CalculationHistory } from "./calculation-history";
import { CalculationHistoryDetail } from "./calculation-history-detail";

export interface History {
    CalculationHistories: CalculationHistory;
    CalculationHistoryDetails: CalculationHistoryDetail
}
