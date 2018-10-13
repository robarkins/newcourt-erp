import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromDebtors from '../actions';

import { Debtor } from '../../models/debtor.model';

export const adapter: EntityAdapter<Debtor> = createEntityAdapter<Debtor>({
  selectId: (debtor: Debtor) => debtor.debtorCode
});

export interface DebtorsState extends EntityState<Debtor> {
  loaded: boolean;
  loading: boolean;
}

export const initialState: DebtorsState = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(
  state = initialState,
  action: fromDebtors.DebtorsActions
): DebtorsState {
  switch (action.type) {
    case fromDebtors.DebtorsActionTypes.LOAD_DEBTORS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromDebtors.DebtorsActionTypes.LOAD_DEBTORS_SUCCESS:
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
  }

  return state;
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectDebtorIds = selectIds;
export const selectDebtorEntities = selectEntities;
export const selectAllDebtors = selectAll;
export const selectDebtorsTotal = selectTotal;
export const getDebtorsLoaded = (state: DebtorsState) => state.loaded;
export const getDebtorsLoading = (state: DebtorsState) => state.loading;
