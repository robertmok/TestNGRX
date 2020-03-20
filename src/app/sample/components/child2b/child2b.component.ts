import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../services/index';

@Component({
  selector: 'app-child2b',
  templateUrl: './child2b.component.html',
  styleUrls: ['./child2b.component.scss']
})
export class Child2bComponent implements OnInit {
  items$ = this.sampleService.store;

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
  }

  onAdd() {
    console.log('child2b: add item');
    this.sampleService.addItem({ name: 'Child2b', toppings: ['Ham', 'Pineapple', 'Sweetcorn'] });
  }

}
