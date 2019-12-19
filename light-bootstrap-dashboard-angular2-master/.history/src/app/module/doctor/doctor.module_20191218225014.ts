import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctordashComponent } from "./doctordash/doctordash.component";
import { RouterModule, Routes } from "@angular/router";

const docrouting: Routes = [
  { path: "doctordash", component: DoctordashComponent }
];

@NgModule({
  declarations: [DoctordashComponent],
  imports: [CommonModule, RouterModule.forChild(docrouting)]
})
export class DoctorModule {}
