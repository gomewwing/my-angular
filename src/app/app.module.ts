import { HeroesService } from './heroes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DarthComponent } from './starwars/darth';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { SliceText } from './courses/slice.pipe';
import { UpperText } from './courses/upper.pipe';
import { AngularBasicComponent } from './courses/angular-basic/angular-basic.component';
import { LukeComponent } from './starwars/luke';
import { IonicComponent } from './courses/ionic/ionic.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoursesComponent,
    SliceText,
    UpperText,
    AngularBasicComponent,
    DarthComponent,
    LukeComponent,
    IonicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
