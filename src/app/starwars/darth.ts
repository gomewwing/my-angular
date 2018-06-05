import { Component } from '@angular/core';

@Component({
    selector: 'darth',
    template: `
    <luke #luke [lukeInput]="darthData" (dartMethod)="darthMethod(luke.lukeInput)"></luke>
    `
})
// <luke #luke [lukeInput]="darthData" (lukeOutput)="darthMethod(luke.lukeInput)"></luke>
export class DarthComponent {

  darthData: string = "I'm your father";

  darthMethod(luke) {
    console.log(luke);
  }

}
