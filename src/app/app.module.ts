import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { DragDropMenuComponent } from './page/drag-drop-menu/drag-drop-menu.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TableComponent } from './page/table/table.component';
import { TableRowHoverComponent } from './components/table-row-hover/table-row-hover.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    DragDropMenuComponent,
    TableComponent,
    TableRowHoverComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
