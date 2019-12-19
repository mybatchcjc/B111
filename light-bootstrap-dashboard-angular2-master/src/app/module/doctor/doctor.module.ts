import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctordashComponent } from "./doctordash/doctordash.component";
import { RouterModule, Routes } from "@angular/router";
import { PostComponent } from "./post/post.component";

const docrouting: Routes = [
  { path: "doctordash", component: DoctordashComponent },
  { path: "doctorpost", component: PostComponent },
  
];

@NgModule({
  declarations: [
    DoctordashComponent,
    PostComponent,

  ],
  imports: [CommonModule, RouterModule.forChild(docrouting)]
})
export class DoctorModule {}
