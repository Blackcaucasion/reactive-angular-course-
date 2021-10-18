import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';


import { CoursesStoreService } from '../services/courses-store.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public beginnerCourses$: Observable<Course[]>;

 public advancedCourses$: Observable<Course[]>;


  constructor(
     private coursesStore:CoursesStoreService) {
  }

  ngOnInit() {
this.reloadCourse()

  }
  reloadCourse(){
    this.beginnerCourses$ = this.coursesStore.filterBYCategoty("BEGINNER");
    this.advancedCourses$ = this.coursesStore.filterBYCategoty("ADVANCED");
    
  }

}




