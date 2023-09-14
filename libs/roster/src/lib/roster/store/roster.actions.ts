import { createAction, props } from '@ngrx/store';

export const loadUserStats = createAction('[Roster] Load User Stats');
export const loadUserStatsSuccess = createAction('[Roster] Load User Stats Success', props<{ userStats: any[] }>());
export const loadUserStatsFailure = createAction('[Roster] Load User Stats Failure', props<{ error: any }>());
