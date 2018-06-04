import { HeroesService } from './heroes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { SliceText } from './courses/slice.pipe';
import { UpperText } from './courses/upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoursesComponent,
    SliceText,
    UpperText
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
