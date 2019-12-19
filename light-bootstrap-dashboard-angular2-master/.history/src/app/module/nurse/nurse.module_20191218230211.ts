import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NursedashComponent } from "./nursedash/nursedash.component";
import { RouterModule, Routes } from "@angular/router";

const nurserouting: Routes = [{ path: "nursedash", component: NursedashComponent }];
@NgModule({
  declarations: [NursedashComponent],
  imports: [CommonModule, RouterModule.forChild(NursedashComponent)]
})
export class NurseModule {}
