import { Word } from './../clases/word';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WordService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('X-Mashape-Key', environment.key);
  }

  getWord(word: string): Observable<Object> {
    return this.http.get(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
      headers: this.headers
    });
  }

  getSavedWords(): Word[] {
    let storage = localStorage.getItem(environment.keyLocalStorage);
    if (!storage) {
      storage = '[]';
    }
    return JSON.parse(storage);
  }

  setWord(result: Word) {
    let results: Word[] = this.getSavedWords();
    if (!results) {
      results = [];
    }
    const search = results.find((w: Word) => {
      return w.word === result.word;
    });
    if (!search) {
      results.unshift(result);
    }
    this.saveWords(results);
  }

  removeWord(word: Word) {
    const words: Word[] = this.getSavedWords();
    const resultIndex = words.findIndex((w: Word) => {
      return w.word === word.word;
    });
    if (resultIndex !== -1) {
      words.splice(resultIndex, 1);
    }
    this.saveWords(words);
  }

  saveWords(words: Word[]) {
    localStorage.setItem(environment.keyLocalStorage, JSON.stringify(words));
  }
}
