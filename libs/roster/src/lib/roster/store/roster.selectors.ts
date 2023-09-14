import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoster from './roster.reducer';

export const selectRosterState = createFeatureSelector<fromRoster.State>(
  fromRoster.rosterFeatureKey
);

export const selectUserStats = createSelector(
  selectRosterState,
  state => state.userStats
);
