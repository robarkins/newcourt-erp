import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as debtorsActions from '../actions';
import { switchMap, map } from 'rxjs/operators';
import { DebtorsService } from '../../services/debtors.service';

@Injectable()
export class DebtorsEffects {
  constructor(
    private actions$: Actions,
    private debtorsService: DebtorsService
  ) {}

  @Effect()
  loadDebtors$ = this.actions$
    .ofType(debtorsActions.DebtorsActionTypes.LOAD_DEBTORS)
    .pipe(
      switchMap(() => {
        return this.debtorsService
          .getDebtors()
          .pipe(map(debtors => new debtorsActions.LoadDebtorsSuccess(debtors)));
      })
    );
}
