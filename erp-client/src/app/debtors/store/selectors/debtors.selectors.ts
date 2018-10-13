import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDebtors from '../reducers/debtors.reducer';

export const selectDebtorsState = createFeatureSelector<
  fromDebtors.DebtorsState
>('debtors');

export const selectDebtorEntities = createSelector(
  selectDebtorsState,
  fromDebtors.selectDebtorEntities
);

export const selectAllDebtors = createSelector(
  selectDebtorsState,
  fromDebtors.selectAllDebtors
);
