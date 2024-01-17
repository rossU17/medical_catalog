import { BaseServiceService } from 'src/app/service/base-service.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent implements OnInit {
editingStudent: Student;

constructor(private baseService: BaseServiceService) {
}
ngOnInit(): void {
  this.editingStudent = new Student();
}
addStudent(): void{
  this.baseService.addNewStudent(this.editingStudent);
  this.editingStudent = new Student();
}
}