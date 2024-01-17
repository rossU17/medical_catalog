import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';
import { BaseServiceService } from 'src/app/service/base-service.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-article-editor',
  templateUrl: './dialog-article-editor.component.html',
  styleUrls: ['./dialog-article-editor.component.css']  
})
export class DialogArticleEditorComponent implements OnInit {
  editingStudent: Student;
  constructor(
    public dialogRef: MatDialogRef<DialogArticleEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student, private baseService:BaseServiceService){
this.editingStudent = data
    }
ngOnInit(): void {
}
onNoClick(): void{
  this.dialogRef.close();
}
}
