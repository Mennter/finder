import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../services/question.service';

@Component({
  selector: 'app-anwser',
  templateUrl: './anwser.component.html',
  styleUrls: ['./anwser.component.css']
})
export class AnwserComponent implements OnInit {
  @Input() option: Option;
  @Output() result = new EventEmitter();

  public style = {};

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.style = {
      'background-color': this.option.state ? 'lightgreen' : 'lightcoral'
    };
    this.result.emit(this.option.state);
  }
}
