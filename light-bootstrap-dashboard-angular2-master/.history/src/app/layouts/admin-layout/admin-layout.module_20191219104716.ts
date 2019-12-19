import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../module/doctor/home/home.component';
import { UserComponent } from '../../module/doctor/user/user.component';
import { TablesComponent } from '../../module/doctor/tables/tables.component';
import { TypographyComponent } from '../../module/doctor/typography/typography.component';
import { IconsComponent } from '../../module/doctor/icons/icons.component';
import { MapsComponent } from '../../module/doctor/maps/maps.component';
import { NotificationsComponent } from '../../module/doctor/notifications/notifications.component';
import { UpgradeComponent } from '../../module/doctor/upgrade/upgrade.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ]
})

export class AdminLayoutModule {}
