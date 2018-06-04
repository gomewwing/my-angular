import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  greeting = 'hello';

  constructor() { }

  ngOnInit() {
  }

  aboutButton() {
    console.log('hi, this is about');

  }

}
