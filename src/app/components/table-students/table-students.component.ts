import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditComponent } from '../student-editor/dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from '../student-editor/dialog-delete/dialog-delete.component';
import { ArticleInfoComponent } from '../article-info/article-info/article-info.component';
// import { DialogArticleEditorComponent } from 'src/app/component/student-editor/dialog-article-editor/dialog-article-editor.component';
@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent {
  students: Student[];
  selectedStudent:Student;

  constructor(private baseService: BaseServiceService,
    public dialog: MatDialog){
      // this.students = [];
  }

  onSelect(Student:Student){
    this.selectedStudent=Student;
}
ngOnInit() {
  console.log("TableStudentComponent");
  this.baseService.getAllStudents().subscribe(data => this.students = data);
}

addNewStudent(): void{
  const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent,{
    width: '400px',
    data: null
  });

  dialogAddingNewStudent.afterClosed().subscribe((result: Student)=>{
    if(result !=null) {
      console.log("adding new student: "+ result.title);

      this.baseService.addNewStudent(result).subscribe(k=>
        this.baseService.getAllStudents().subscribe(data => this.students = data));
    }
  });
}

deleteStudent(student: Student){
  const dialogAddingNewStudent = this.dialog.open(DialogDeleteComponent,{
    width: '700px',
    data: null
  });
  dialogAddingNewStudent.afterClosed().subscribe((confirmDelete: boolean) =>{
    if(confirmDelete){
      console.log("delete student: ");
      this.baseService.deleteStudent(student).subscribe(k=>
        this.baseService.getAllStudents().subscribe(data => this.students = data));
    }
  })
  }

  editStudent(student: Student){
    const dialogAddingNewStudent = this.dialog.open(DialogEditComponent,{
      width: '700px',
      
      data: {id: student.id, title: student.title, fio: student.fio, category:student.category, country:student.country, city:student.city, year:student.year, text:student.text}
      
    });
    dialogAddingNewStudent.afterClosed().subscribe((student: Student) =>{
      if(student != null){
        console.log("edit student: " + student.id);
        this.baseService.editStudent(student).subscribe(k=>
          this.baseService.getAllStudents().subscribe(data => this.students = data));
      }
    })
    }
    editTextArticleStudent(student: Student){
      const dialogAddingNewStudent = this.dialog.open(DialogEditComponent,{
        width: '800px', 
        height: '1000px',
        data: {id: student.id,  text:student.text}
      });
      dialogAddingNewStudent.afterClosed().subscribe((student: Student) =>{
      
        if(student != null){
          console.log("edit student: " + student.id);
          this.baseService.editTextStudent(student).subscribe(k=>
            this.baseService.getAllStudents().subscribe(data => this.students = data));
        }
      })
      }
    openArticle(student: Student){
      const dialogAddingNewStudent = this.dialog.open(ArticleInfoComponent,{
        data: {id: student.id}
      });

      dialogAddingNewStudent.afterClosed().subscribe((student: Student) =>{
       
        this.baseService.getAllStudents().subscribe(data => this.students = data)});
        }
      }
      
