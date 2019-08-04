import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-editor',
  templateUrl: './example-editor.component.html',
  styleUrls: ['./example-editor.component.css']
})
export class ExampleEditorComponent implements OnInit {
  constructor() {
  }

  @Input() edit = false;

  public editorWord = false;

  @Input() example: string;
  @Output() modifiedExample = new EventEmitter();

  ngOnInit(): void {
    if (this.example.replace(' ', '').length === 0) {
      this.editorWord = true;
    }
  }

  save(): void {
    this.editorWord = false;
    this.modifiedExample.emit();
  }
}
