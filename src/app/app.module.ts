import { IndexComponent } from './modules/game/components/index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListWordsComponent } from './components/list-words/list-words.component';
import { SearchWordComponent } from './components/search-word/search-word.component';
import { WordService } from './services/word.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ExampleViewerComponent } from './components/example-viewer/example-viewer.component';
import { ExampleEditorComponent } from './components/example-editor/example-editor.component';
import { GameModule } from './modules/game/game.module';

@NgModule({
  declarations: [AppComponent, ListWordsComponent, SearchWordComponent,  ExampleViewerComponent, ExampleEditorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
