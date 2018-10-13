import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Debtor } from './../models/debtor.model';

@Injectable({
  providedIn: 'root'
})
export class DebtorsService {
  constructor(private db: AngularFirestore) {}

  getDebtors(): Observable<Debtor[]> {
    return this.db.collection('debtors').valueChanges() as Observable<Debtor[]>;
  }
}
