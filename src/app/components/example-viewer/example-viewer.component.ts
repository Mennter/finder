import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.css']
})
export class ExampleViewerComponent implements OnInit {
  constructor() {}

  public _examples: string[];

  @Input() edit = true;

  public addButton = true;

  @Input() set examples(examples: string[]) {
    if (examples) {
      this._examples = examples;
    } else {
      this._examples = [];
    }
  }


  ngOnInit(): void {}

  newExample() {
    const emptyExample = this._examples.findIndex(example => example === '');
    if (emptyExample === -1) {
      this._examples.push('');
      this.addButton = false;
    } else {
      this.addButton = true;
    }
  }

}
