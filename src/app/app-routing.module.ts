import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DragDropMenuComponent} from './page/drag-drop-menu/drag-drop-menu.component';
import {TableComponent} from './page/table/table.component';

const routes: Routes = [
  {path: 'drag-drop-menu', component: DragDropMenuComponent},
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
