import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllUsersRoutingModule } from './all-users-routing.module';
import { AllUsersComponent } from './all-users.component';
import { UserService } from 'src/app/services/user.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [AllUsersComponent],
  imports: [
    CommonModule,
    AllUsersRoutingModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  exports: [AllUsersComponent],
  providers:[UserService]
})
export class AllUsersModule { }
