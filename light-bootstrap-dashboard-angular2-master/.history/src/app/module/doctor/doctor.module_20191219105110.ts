import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctordashComponent } from "./doctordash/doctordash.component";
import { RouterModule, Routes } from "@angular/router";
import { PostComponent } from "./post/post.component";
import { HomeComponent } from "app/module/doctor/home/home.component";
import { UserComponent } from "app/module/doctor/user/user.component";
import { TablesComponent } from "app/module/doctor/tables/tables.component";
import { TypographyComponent } from "app/module/doctor/typography/typography.component";
import { IconsComponent } from "app/module/doctor/icons/icons.component";
import { MapsComponent } from "app/module/doctor/maps/maps.component";
import { NotificationsComponent } from "app/module/doctor/notifications/notifications.component";
import { UpgradeComponent } from "app/module/doctor/upgrade/upgrade.component";

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
