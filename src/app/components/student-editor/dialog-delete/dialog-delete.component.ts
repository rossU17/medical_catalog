import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseServiceService } from 'src/app/service/base-service.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent  implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private baseService:BaseServiceService){
    }

  ngOnInit(): void {
  }

  onNoClick(): void{
    this.dialogRef.close(false);
  }

  onYesClick(): void{
    this.dialogRef.close(true);
  }
}