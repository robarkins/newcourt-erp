import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

// models
import { Debtor } from '../../models/debtor.model';
import { NewcourtGridColumn } from '@shared/ui/models';

@Component({
  selector: 'app-debtors-viewer',
  templateUrl: './debtors-viewer.component.html',
  styleUrls: ['./debtors-viewer.component.scss']
})
export class DebtorsViewerComponent implements OnInit {
  debtors$: Observable<Debtor[]>;
  columns: NewcourtGridColumn[];

  constructor(private store: Store<fromStore.DebtorsState>) {}
  ngOnInit() {
    // Load debtors from store
    this.debtors$ = this.store.select(fromStore.selectAllDebtors);

    // dispatch load action onInit
    this.store.dispatch(new fromStore.LoadDebtors());

    // set displayed columns
    this.columns = [
      { field: 'debtorCode', title: 'Code' },
      { field: 'name', title: 'Name' }
    ];
  }
}
