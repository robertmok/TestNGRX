import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const state = {
  items: [
    { name: 'New Yorker', toppings: ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms'] },
    { name: 'Hot & Spicy', toppings: ['Jalapenos', 'Herbs', 'Pepperoni', 'Chicken'] },
    { name: 'Hawaiian', toppings: ['Ham', 'Pineapple', 'Sweetcorn'] }
  ]
};

@Injectable()
export class SampleService {
  private subject = new BehaviorSubject<any>(state);
  store = this.subject.asObservable().pipe(distinctUntilChanged());

  constructor(private http: HttpClient) { }

  addItem(item: any) {
    const value = this.subject.value;
    this.subject.next({ items: [...value.items, item] });
  }

  removeItem(index: number) {
    const value = this.subject.value;
    // console.log(value.items.splice(index, 1)); // avoid mutation
    this.subject.next({ items: value.items.filter((_, idx) => idx !== index) });
  }

  // GET data and return new state example
  // private _todos = new BehaviorSubject<Todo[]>([]);
  // private baseUrl = 'https://56e05c3213da80110013eba3.mockapi.io/api';
  // private dataStore: { todos: Todo[] } = { todos: [] };
  // readonly todos = this._todos.asObservable();
  // loadAll() {
  //   this.http.get(`${this.baseUrl}/todos`).subscribe(
  //     data => {
  //       this.dataStore.todos = data;
  //       this._todos.next(Object.assign({}, this.dataStore).todos);
  //     },
  //     error => console.log('Could not load todos.')
  //   );
  // }
}
