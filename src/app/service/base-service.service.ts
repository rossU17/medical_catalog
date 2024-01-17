import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
 private studentsUrl = 'api/base/article';

  constructor(
    private http: HttpClient) { }

  getAllStudents():Observable<Student[]> {;
    return this.http.get<Student[]>(this.studentsUrl);
  }
  getArticle(student:Student):Observable<Student>  {
    return this.http.get<Student>(this.studentsUrl + '/' + student.id);
  }
  addNewStudent(student: Student): Observable<Student>{
    console.log('addNewStudent');
    return this.http.post<Student>(this.studentsUrl, student).pipe();
  }
  editStudent(student:Student):Observable<Student> {
    console.log('editStudent');
    return this.http.put<Student>(this.studentsUrl, student).pipe();
  }
  editTextStudent(student:Student):Observable<Student> {
    console.log('editTextStudent');
    return this.http.put<Student>(this.studentsUrl, student).pipe();
  }
  deleteStudent(student:Student):Observable<Student> {
    return this.http.delete<Student>(this.studentsUrl + '/' + student.id).pipe();
  }

}