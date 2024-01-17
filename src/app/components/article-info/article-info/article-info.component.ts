import { Component, Inject, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { DialogEditComponent } from '../../student-editor/dialog-edit/dialog-edit.component';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})

export class ArticleInfoComponent  implements OnInit {
  editingStudent: any;
  students: any[] = [];
  students111: Student;
  constructor(public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private baseService:BaseServiceService){
// this.editingStudent = this.data;
    }
  ngOnInit(): void {
   
    // this.baseService.getArticle(this.editingStudent).subscribe((data: Student) => {
    //   this.students111 = data;
    // });
    this.loadArticle();

  }
  onNoClick(): void{
    this.dialogRef.close();
  }

  loadArticle(): void {

console.log(this.editingStudent);
    this.baseService.getArticle(this.data).subscribe((response: Student) =>{ this.students111 = response});
  }
}
