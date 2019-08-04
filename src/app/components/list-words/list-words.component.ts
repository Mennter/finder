

import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { Word } from 'src/app/clases/word';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css']
})
export class ListWordsComponent implements OnInit {
  public words: Word[];

  public showDelete = false;


  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.words = this.wordService.getSavedWords();
  }

  removeWord(word: Word) {
    this.wordService.removeWord(word);
    this.words = this.wordService.getSavedWords();
  }

  saveWords() {
    this.wordService.saveWords(this.words);
  }

}
