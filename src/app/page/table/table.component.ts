import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  table = [
    {
      name: 'Taleh Karimov', mail: 'Taleh.glmg@gmail.com',
      activePageList: ['ana səhifə', 'xəbərlər', 'testimonials', 'əlaqə']
    },
    {
      name: 'Taleh Karimov', mail: 'Taleh.glmg@gmail.com',
      activePageList: ['ana səhifə', 'xəbərlər', 'testimonials', 'əlaqə']
    },
    {
      name: 'Taleh Karimov', mail: 'Taleh.glmg@gmail.com',
      activePageList: ['ana səhifə', 'xəbərlər', 'testimonials', 'əlaqə']
    },
    {
      name: 'Taleh Karimov', mail: 'Taleh.glmg@gmail.com',
      activePageList: ['ana səhifə', 'xəbərlər', 'testimonials', 'əlaqə']
    },
    {
      name: 'Taleh Karimov', mail: 'Taleh.glmg@gmail.com',
      activePageList: ['ana səhifə', 'xəbərlər', 'testimonials', 'əlaqə']
    },
  ];

  hoverData = {
    slug: 'android-ucun-tor-brauzer',
    muellif: 'Ceyhun Farzaliyev',
    yaradildi: '08/04/2020, 20:01',
    yenilenib: '13/08/2020, 20:01',
  };

  img = 'assets/images/marcom-logo.svg';

  state = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
