import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.css']
})
export class AngularBasicComponent {

  @Output() greeting = new EventEmitter();
  list: string[] = ["hi", "my", "name", "is", "Oh"];
  onChildClick() {

    this.greeting.emit(this.list);

  }


}
