import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from 'src/app/services/user.service';




@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateUserRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [CreateUserComponent],
  providers:[UserService]
})
export class CreateUserModule { }
