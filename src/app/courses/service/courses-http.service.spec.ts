import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses-http.service"
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { COURSES } from "server/db-datarestore";
import { Course } from "../model/course-model";

fdescribe ("CoursesService", () =>{
  let coursesService: CoursesService,
  httpTestingController: HttpTestingController;

beforeEach(() => {

  TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule
      ],
      providers: [
          CoursesService
      ]
  });

  coursesService = TestBed.inject(CoursesService),
  httpTestingController = TestBed.inject(HttpTestingController);

});

it('should retrieve all courses', () => {

  coursesService.loadAllCourses()
      .subscribe(courses => {

          expect(courses).toBeTruthy('No courses returned');

          expect(courses.length).toBe(12,
              "incorrect number of courses");

          const course = courses.find(course => course.id == 12);

          //expect(course.titles.description).toBe(
          //    "Angular Testing Course");

      });

  const req = httpTestingController.expectOne('http://localhost:9000/api/courses');

  expect(req.request.method).toEqual("GET");

  req.flush({courses: Object.values(COURSES)});

});


it('should find a course by id', () => {

  coursesService.loadCourseById(12)
      .subscribe(course => {

          expect(course).toBeTruthy();
          //expect(course.id).toBe(12);

      });

  const req = httpTestingController.expectOne('http://localhost:9000/api/courses/12');

  expect(req.request.method).toEqual("GET");

  req.flush(COURSES[12]);

});


it('should save the course data', () => {

//  const changes :Partial<Course> =
 //     {titles:{description: 'Testing Course'}};

 // coursesService.saveCourse(12, changes)
 //     .subscribe(course => {

  //       expect(course.id).toBe(12);

  //    });

  const req = httpTestingController.expectOne('http://localhost:9000/api/courses/12');

  expect(req.request.method).toEqual("PUT");

 // expect(req.request.body.titles.description)
 //     .toEqual(changes.titles.description);

 // req.flush({
 //     ...COURSES[12],
  //    ...changes
 // })

});

it('should give an error if save course fails', () => {

 // const changes :Partial<Course> =
    //  {titles:{description: 'Testing Course'}};

 // coursesService.saveCourse(12, changes)
//      .subscribe(
 //         () => fail("the save course operation should have failed"),

 //         (error: HttpErrorResponse) => {
 //             expect(error.status).toBe(500);
  //        }
  //    );

  const req = httpTestingController.expectOne('http://localhost:9000/api/courses/12');

  expect(req.request.method).toEqual("PUT");

  req.flush('Save course failed', {status:500,
      statusText:'Internal Server Error'});
});

afterEach(() => {

  httpTestingController.verify();
});
})