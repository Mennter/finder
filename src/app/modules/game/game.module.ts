import { QuestionService } from "./services/question.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GameRoutingModule } from "./game-routing.module";
import { IndexComponent } from "./components/index/index.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatChipsModule } from "@angular/material/chips";
import { WordService } from 'src/app/services/word.service';
import { AnwserComponent } from './components/anwser/anwser.component';

@NgModule({
  declarations: [IndexComponent, AnwserComponent],
  providers: [QuestionService , WordService],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    HttpModule,
    MatChipsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule
  ]
})
export class GameModule {}
