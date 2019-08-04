import { Result } from './../../../../clases/word';
import { QuestionService, Question } from "./../../services/question.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  private questions: Question[];

  public quetion: Question;
  public result;
  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.quetion = this.questions[0];
    console.table(this.quetion);
  }
  onResult(result) {
    this.result = result;
  }
}
