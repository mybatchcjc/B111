import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashModule } from './admindash/admindash.module';
import { AdmindashComponent } from './admindash/admindash.component';

@NgModule({
  declarations: [AdmindashComponent],
  imports: [
    CommonModule,
    AdmindashModule
  ]
})
export class AdminModule { }
