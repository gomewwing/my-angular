import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  course = {
    title: "The Oh Angular Course",
    student: 49899,
    rating: 4.9512,
    price: 200000,
    releaseDate: new Date(2018, 1, 1)
  };

  text = `Lorem ipsum dolor sit amet consectetur`;

}
