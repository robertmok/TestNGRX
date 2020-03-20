import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  @Input() items: any;
  @Input() form: any;
  @Output() submitCustom = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('child: submit');
    this.submitCustom.emit();
  }

}
