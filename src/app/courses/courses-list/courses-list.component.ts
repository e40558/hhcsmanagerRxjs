import { Component, ViewChild } from '@angular/core';
import { CoursesService } from '../service/courses-http.service';
import { LessonsDataSource } from '../service/lessonsDataSource ';
import { MatPaginator } from '@angular/material/paginator';
import { merge, tap } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course-model';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  course:Course;
    dataSource: LessonsDataSource;
    displayedColumns= ["seqNo", "title", "duration"];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private coursesService: CoursesService, private route: ActivatedRoute) {}

    ngOnInit() {
        //this.course = this.route.snapshot.data["course"];
        this.dataSource = new LessonsDataSource(this.coursesService);
        this.dataSource.loadLessons(175, '', 'asc', 0, 3);
    }    
    
    ngAfterViewInit() {
        
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadLessonsPage())
            )
            .subscribe();
    }

    loadLessonsPage() {
        this.dataSource.loadLessons(
            175,  '',  this.sort.direction, 
            this.paginator.pageIndex, this.paginator.pageSize);
    }
}