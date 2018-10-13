import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { DebtorsViewerComponent } from './containers/debtors-viewer/debtors-viewer.component';

import { effects } from './store';

import { reducer } from './store/reducers/debtors.reducer';

export const routes: Routes = [{ path: '', component: DebtorsViewerComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('debtors', reducer),
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  declarations: [DebtorsViewerComponent]
})
export class DebtorsModule {}
