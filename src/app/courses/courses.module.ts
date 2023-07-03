import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CoursesRoutingModule } from './courses-routing.module';
import { HomeComponent } from './home/home.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    CourseDialogComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule

  ]
})
export class CoursesModule { }
