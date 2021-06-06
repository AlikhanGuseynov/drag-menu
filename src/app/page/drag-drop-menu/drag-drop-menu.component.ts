import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {asapScheduler} from 'rxjs';
import {DEBUG} from '@angular/compiler-cli/src/ngtsc/logging/src/console_logger';

@Component({
  selector: 'app-drag-drop-menu',
  templateUrl: './drag-drop-menu.component.html',
  styleUrls: ['./drag-drop-menu.component.scss']
})
export class DragDropMenuComponent implements OnInit, AfterViewInit {

  public dls: CdkDropList[] = [];

  menu = [
    {
      value: 'home',
      text: 'home',
      subMenu: [
        {
          value: 'home-1',
          text: 'home-1',
        },
        {
          value: 'home-2',
          text: 'home-2',
        },
      ]
    },
    {
      value: 'about',
      text: 'about',
      subMenu: [
        {
          value: 'about-1',
          text: 'about-1',
        },
        {
          value: 'about-2',
          text: 'about-2',
        },
        {
          value: 'about-3',
          text: 'about-3',
        },
      ]
    },
    {
      value: 'news',
      text: 'news',
    }
  ];

  @ViewChildren(CdkDropList)
  private dlq: QueryList<CdkDropList>;

  constructor() {
  }

  ngOnInit(): void {
    this.menu = this.menu.map(item => {
      return {
        ...item,
        open: false
      };
    });
  }

  openCloseSubMenu(subMenuList: HTMLUListElement): void {
    subMenuList.classList.toggle('active');
  }

  checkClass(subMenuList: HTMLUListElement): boolean {
    return subMenuList.classList.contains('active');
  }


  drop(event: any): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  ngAfterViewInit(): void {
    // const ldls: CdkDropList[] = [];
    //
    // this.dlq.forEach((dl) => {
    //   ldls.push(dl);
    // });
    //
    // this.dls = ldls;
  }


}






























