import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'luke',
  template: `
  <p>I'm Luke Skywalker..</p>
  `
})

export class LukeComponent {
  @Input() lukeInput;
  @Output() lukeOutput;

  click() {
    console.log("?");
  }

}
