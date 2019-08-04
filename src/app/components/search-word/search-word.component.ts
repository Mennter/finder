import { WordService } from './../../services/word.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Message } from 'src/app/clases/message';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Word } from 'src/app/clases/word';

@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit, OnDestroy {
  public word = '';

  public result: Word;
  private subsWord: Subscription;
  public loading = false;

  public message: Message;

  constructor(
    private wordService: WordService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subsWord && this.subsWord.unsubscribe();
  }

  findWord() {
    if (this.word.length === 0) { return; }
    this.loading = true;
    this.result = undefined;
    this.message = undefined;
    this.subsWord = this.wordService.getWord(this.word).subscribe({
      next: (_result: Word) => {
        this.loading = false;
        this.result = _result;
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
        switch (error.status) {
          case 404:
            this.message = {
              icon: 'close',
              description: 'We couldn\'t find it. Try again with another word.'
            };
            break;

          default:
            this.message = {
              icon: 'warning',
              description:
                'Sorry! We had have problem. Try again in a few minutes.'
            };
            break;
        }
      }
    });
  }

  saveWord(word: Word) {
    this.wordService.setWord(word);
    this.snackBar.open('Saved successfully', '', {
      duration: 2000
    });
  }

  clearInput() {
    this.word = '';
  }
}
