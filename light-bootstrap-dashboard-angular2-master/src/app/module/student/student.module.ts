import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentdashComponent } from "./studentdash/studentdash.component";
import { RouterModule, Routes } from "@angular/router";

const sturouting: Routes = [
  { path: "studash", component: StudentdashComponent }
];

@NgModule({
  declarations: [StudentdashComponent],
  imports: [CommonModule, RouterModule.forChild(sturouting)]
})
export class StudentModule {}
