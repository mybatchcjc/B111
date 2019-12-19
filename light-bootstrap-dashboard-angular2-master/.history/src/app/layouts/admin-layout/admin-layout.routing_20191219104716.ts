import { Routes } from '@angular/router';

import { HomeComponent } from '../../module/doctor/home/home.component';
import { UserComponent } from '../../module/doctor/user/user.component';
import { TablesComponent } from '../../module/doctor/tables/tables.component';
import { TypographyComponent } from '../../module/doctor/typography/typography.component';
import { IconsComponent } from '../../module/doctor/icons/icons.component';
import { MapsComponent } from '../../module/doctor/maps/maps.component';
import { NotificationsComponent } from '../../module/doctor/notifications/notifications.component';
import { UpgradeComponent } from '../../module/doctor/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
