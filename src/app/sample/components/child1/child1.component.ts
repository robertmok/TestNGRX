import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input() items: any;
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit({ name: 'Child1', toppings: ['Ham', 'Pineapple', 'Sweetcorn'] });
  }

  onRemove(index) {
    console.log('child: remove ' + index);
    this.remove.emit(index);
  }

}
