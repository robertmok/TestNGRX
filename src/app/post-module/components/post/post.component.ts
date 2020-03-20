import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() posts;
  @Input() error$;
  @Output() viewComments = new EventEmitter();
  @Output() loadPosts = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
