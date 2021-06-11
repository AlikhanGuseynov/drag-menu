import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-row-hover',
  templateUrl: './table-row-hover.component.html',
  styleUrls: ['./table-row-hover.component.scss']
})
export class TableRowHoverComponent implements OnInit {

  @Input() data: {} = {};
  @Input() img = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
