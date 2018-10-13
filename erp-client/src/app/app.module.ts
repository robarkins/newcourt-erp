import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// not used in productions
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// modules
import { CoreModule } from './core/core.module';

// components
import { AppComponent } from './app.component';

import { environment } from './../environments/environment';

export const routes: Routes = [
  { path: 'debtors', loadChildren: './debtors/debtors.module#DebtorsModule' }
];

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    CoreModule,

    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
