import { createFeature, createReducer, on } from '@ngrx/store';
import * as RosterActions from './roster.actions';

export const rosterFeatureKey = 'roster';

export interface State {
  userStats: any[];
  error: any;
}

export const initialState: State = {
  userStats: [],
  error: null,
};

export const rosterFeature = createFeature({
  name: rosterFeatureKey,
  reducer: createReducer(
    initialState,
    on(RosterActions.loadUserStatsSuccess, (state, action) => ({ ...state, userStats: action.userStats })),
    on(RosterActions.loadUserStatsFailure, (state, action) => ({ ...state, error: action.error })),
  ),
});
