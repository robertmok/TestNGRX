import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../root-store/app.reducers';
import * as fromUser from '../root-store/reducers/user.reducers';
import { GetUser, GetUsers } from '../root-store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  /*
    "dumb" components do nothing but display data based on input and
    emit relevant events back up for parent, or "container" components to handle
  */

  user$ = this.store.pipe(select(fromUser.selectSelectedUser));
  users$ = this.store.pipe(select(fromUser.selectUserList));
  error$ = this.store.pipe(select(fromUser.selectUserListError));

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  navigateToUser(id: number) {
    this.store.dispatch(new GetUser(id));
  }

  loadUsers() {
    console.log('load users ...');
    this.store.dispatch(new GetUsers());
  }
}
