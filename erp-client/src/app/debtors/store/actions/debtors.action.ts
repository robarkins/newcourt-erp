import { Action } from '@ngrx/store';

import { Debtor } from '../../models/debtor.model';

export enum DebtorsActionTypes {
  LOAD_DEBTORS = '[Debtors] Load Debtors',
  LOAD_DEBTORS_SUCCESS = '[Debtors] Load Debtors Success'
}

export class LoadDebtors implements Action {
  readonly type = DebtorsActionTypes.LOAD_DEBTORS;
}

export class LoadDebtorsSuccess implements Action {
  readonly type = DebtorsActionTypes.LOAD_DEBTORS_SUCCESS;

  constructor(public payload: Debtor[]) {}
}

export type DebtorsActions = LoadDebtors | LoadDebtorsSuccess;
