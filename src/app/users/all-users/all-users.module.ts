import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllUsersRoutingModule } from './all-users-routing.module';
import { AllUsersComponent } from './all-users.component';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [AllUsersComponent],
  imports: [
    CommonModule,
    AllUsersRoutingModule,MatSliderModule,
  ],
  exports: [AllUsersComponent]
})
export class AllUsersModule { }
