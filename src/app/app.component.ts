import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

// import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { // implements OnInit
  title = 'TestNgrx';
  // config$ = this._store.pipe(select(selectConfig));

  // constructor(private _store: Store<IAppState>) {}

  // ngOnInit() {
  //   this._store.dispatch(new GetConfig());
  // }
}
