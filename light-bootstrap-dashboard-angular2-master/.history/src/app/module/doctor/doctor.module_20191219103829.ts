import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctordashComponent } from "./doctordash/doctordash.component";
import { RouterModule, Routes } from "@angular/router";
import { PostComponent } from "./post/post.component";
import { HomeComponent } from "app/home/home.component";
import { UserComponent } from "app/user/user.component";
import { TablesComponent } from "app/tables/tables.component";
import { TypographyComponent } from "app/typography/typography.component";
import { IconsComponent } from "app/icons/icons.component";
import { MapsComponent } from "app/maps/maps.component";
import { NotificationsComponent } from "app/notifications/notifications.component";
import { UpgradeComponent } from "app/upgrade/upgrade.component";

const docrouting: Routes = [
  { path: "doctordash", component: DoctordashComponent },
  { path: "doctorpost", component: PostComponent },
  { path: 'dashboard',      component: HomeComponent },
  { path: 'user',           component: UserComponent },
  { path: 'table',          component: TablesComponent },
  { path: 'typography',     component: TypographyComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent },
  { path: 'notifications',  component: NotificationsComponent },
  { path: 'upgrade',        component: UpgradeComponent },
];

@NgModule({
  declarations: [DoctordashComponent, PostComponent],
  imports: [CommonModule, RouterModule.forChild(docrouting)]
})
export class DoctorModule {}
