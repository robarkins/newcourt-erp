import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild([])
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class CoreModule {}
