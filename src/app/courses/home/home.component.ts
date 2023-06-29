import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course-model';
import { MatDialog } from '@angular/material/dialog';
import { CoursesStore } from '../service/courses-store';
import { CoursesService } from '../service/courses-http.service';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'courses-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number> = new Observable<number>;
  courses$ : Observable<Course[]> = new Observable<Course[]>;
  beginnerCourses$ : Observable<Course[]> = new Observable<Course[]>;
  advancedCourses$ : Observable<Course[]> = new Observable<Course[]>;
  
  
  constructor( private dialog: MatDialog,
    private store: CoursesStore){}
  ngOnInit(): void {
    this.reloadCourses()
  }

  reloadCourses() {
    this.beginnerCourses$ = this.store.filterByCategory("BEGINNER");
    this.advancedCourses$ = this.store.filterByCategory("ADVANCED");
       
    //    this.advancedCourses$ = this.store.selectAdvancedCourse();
    //   this.beginnerCourses$ = this.store.selectBeginnerCourse();

    //  this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

    //  this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

    //  this.promoTotal$ = this.store.pipe(select(selectPromoTotal));

}

onAddCourse(){
  const dialogConfig = defaultDialogConfig();

dialogConfig.data = {
  dialogTitle:"Create Course",
  mode: 'create'
};

this.dialog.open(CourseDialogComponent, dialogConfig);

  
}


}


