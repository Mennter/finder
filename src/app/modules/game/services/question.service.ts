import { WordService } from "./../../../services/word.service";
import { Injectable } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  constructor(private wordService: WordService) {}

  public getQuestions(quantity: number = 5) {
    let questions: Question[] = [];
    for (let index = 0; index < quantity; index++) {
      questions.push(this.makeQuestionDefinition());
    }
    return questions;
  }

  private makeQuestionDefinition(quantity: number = 3): Question {
    const question = { queston: "", options: [] };

    const words = this.wordService.getSavedWords();
    const indexTrueQuestion = this.obtainRandomNumber(words.length - 1);
    const trueQuestion = words[indexTrueQuestion];
    words.splice(indexTrueQuestion, 1);

    question.queston = `Which is the meaning of ${trueQuestion.word}?`;
    question.options.push({
      anwser: `${
        trueQuestion.results[
          this.obtainRandomNumber(trueQuestion.results.length - 1)
        ].definition
      }`,
      state: true
    });

    for (let index = 0; index < quantity; index++) {
      const selectedIndex = this.obtainRandomNumber(words.length - 1);
      const wordSelected = words[selectedIndex];
      words.splice(selectedIndex, 1);
      question.options.push({
        anwser: `${
          wordSelected.results[
            this.obtainRandomNumber(wordSelected.results.length - 1)
          ].definition
        }`,
        state: false
      });
    }

    question.options.sort(() => {
      return Math.random() - 0.5;
    });

    return question;
  }

  private obtainRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}

export class Question {
  queston: string;
  options: Option[];
}

export class Option {
  anwser: string;
  state: boolean;
}
