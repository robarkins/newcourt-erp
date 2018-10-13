import * as fromDebtors from './debtors.reducer';

export interface DebtorsState {
  debtors: fromDebtors.DebtorsState;
}

// import {
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector
// } from '@ngrx/store';

// export const reducers: ActionReducerMap<DebtorsState> = {
//   debtors: fromDebtors.reducer
// };
