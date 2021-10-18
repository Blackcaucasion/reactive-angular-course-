import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
import { MessageServices } from '../messages/messages.servies';
import { Course, sortCoursesBySeqNo } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private subject = new BehaviorSubject<Course[]>([]);
  courses$: Observable<Course[]> = this.subject.asObservable();

  filterBYCategoty(category: string): Observable<Course[]> {
    return this.courses$
      .pipe(map(courses =>
        courses.filter(course => course.category == category)
          .sort(sortCoursesBySeqNo)
      ))

  }
  constructor(private http: HttpClient,
    private loading: LoadingService,
    private message: MessageServices) {
    this.loadAllCourses()
  }
  private loadAllCourses() {
    const loadCourses$ = this.http.get<Course[]>('api/courses')
      .pipe(
        map(response => response["payload"]),
        catchError(err => {
          const message = " could not load course";
          this.message.showErrors(message);
          console.log(message, err);
          return throwError(err);
        }),
        tap(courses => this.subject.next(courses))
      );
    this.loading.showLoaderUntilCompleted(loadCourses$).subscribe();
  }
}
