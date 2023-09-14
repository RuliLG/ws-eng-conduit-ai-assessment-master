import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as RosterActions from './roster.actions';
import { UserStatsService } from '../user-stats.service';

@Injectable()
export class RosterEffects {
  loadUserStats$ = createEffect(() => this.actions$.pipe(
    ofType(RosterActions.loadUserStats),
    mergeMap(() => this.userStatsService.getUserStats().pipe(
      map(userStats => RosterActions.loadUserStatsSuccess({ userStats })),
      catchError(error => of(RosterActions.loadUserStatsFailure({ error })))
    ))
  ));

  constructor(private actions$: Actions, private userStatsService: UserStatsService) {}
}
