import { Component, OnInit , Input, Output, OnChanges, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user-his',
  template: require('./user-his.component.html')
})
export class UserHisComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
