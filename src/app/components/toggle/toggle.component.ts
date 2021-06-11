import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  stateValue = false;
  @Output() stateChange = new EventEmitter();
  date = new Date();
  id = this.date.getMilliseconds();

  @Input()
  get state(): boolean {
    return this.stateValue;
  }

  set state(val) {
    this.stateValue = val;
    this.stateChange.emit(this.stateValue);
  }

  ngOnInit(): void {
  }

  stateToggle(event): void {
    this.state = event.checked;
  }
}
