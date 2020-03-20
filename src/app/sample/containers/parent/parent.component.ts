import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SampleService } from '../../services/index';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  items$ = this.sampleService.store;
  sampleForm: FormGroup;

  constructor(private sampleService: SampleService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sampleForm = this.formBuilder.group({
      itemGroup1: this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
        amount: [null, [Validators.required]],
      }),
      itemGroup2: this.formBuilder.group({
        type: [null, [Validators.required]],
        list: this.formBuilder.array([])
      })
    });
  }

  addItem(event: any) {
    console.log('parent: add item');
    this.sampleService.addItem(event);
  }

  removeItem(event: number) {
    console.log('parent: remove item ' + event);
    this.sampleService.removeItem(event);
  }

  submitCustom() {
    console.log('parent: submit');

  }
}
