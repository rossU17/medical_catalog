import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableStudentsComponent } from './components/table-students/table-students.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
const routes: Routes = [
  //{ path: '', component: TableStudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
