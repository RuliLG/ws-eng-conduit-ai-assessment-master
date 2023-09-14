import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster.component';
import { provideState } from '@ngrx/store';
import { rosterFeature } from './store/roster.reducer';
import { RosterEffects } from './store/roster.effects';
import { provideEffects } from '@ngrx/effects';

export const ROSTER_ROUTES: Routes = [
  { path: '', component: RosterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROSTER_ROUTES)],
  exports: [RouterModule],
  providers: [
    provideState(rosterFeature),
    provideEffects(RosterEffects),
  ],
})
export class RosterRoutingModule { }
