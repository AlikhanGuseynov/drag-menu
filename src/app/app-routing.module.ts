import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DragDropMenuComponent} from './page/drag-drop-menu/drag-drop-menu.component';

const routes: Routes = [
  {path: 'drag-drop-menu', component: DragDropMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
