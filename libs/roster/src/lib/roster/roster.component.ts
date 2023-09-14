import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as fromRoster from './store/roster.reducer';
import * as RosterActions from './store/roster.actions';
import * as RosterSelectors from './store/roster.selectors';

@Component({
  selector: 'conduit-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
})
export class RosterComponent implements OnInit {

  // add a console.log every time the users$ observable emits a value
  users$ = this.store.select(RosterSelectors.selectUserStats).pipe(
  filter(users => !!users)
  );

  constructor(private store: Store<fromRoster.State>) {}

  ngOnInit() {
    this.store.dispatch(RosterActions.loadUserStats());
  }
}
