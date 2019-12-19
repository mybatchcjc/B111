import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeedashComponent } from "./employeedash/employeedash.component";
import { RouterModule, Routes } from "@angular/router";

const emproutting: Routes = [
  { path: "empdash", component: EmployeedashComponent }
];

@NgModule({
  declarations: [EmployeedashComponent],
  imports: [CommonModule, RouterModule.forChild(emproutting)]
})
export class EmployeeModule {}
