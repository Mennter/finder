import { SearchWordComponent } from './components/search-word/search-word.component';
import { ListWordsComponent } from './components/list-words/list-words.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// /modules/game/game.module

const routes: Routes = [
  {
    path: 'search',
    component: SearchWordComponent
  },
  {
    path: 'game',
    loadChildren: 'src/app/modules/game/game.module#GameModule',
  },
  {
    path: '',
    component: ListWordsComponent
  },
  {
    path: '**',
    component: ListWordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
