import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  isSubmitted: boolean = false;
  user: User  = new User();
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, public userService: UserService) {
    this.userForm = this.formBuilder.group({
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      job: new FormControl(this.user.job, [Validators.required])
    });


  }

  ngOnInit(): void {
  }

  getErrorMessageForEmail() {
    if (this.userForm?.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.userForm?.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageForJob() {
    if (this.userForm?.controls.job.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  createUser() {
    this.isSubmitted = true;
    console.log(this.user);
    if (this.userForm.valid) {
      this.userService.addUser(this.user).subscribe(res=>{
        console.log(res);
        this.toastr.success('Succesfully Operation');
      },err=>{
        console.log(err);
        this.toastr.error('Something went wrong, please try again later');
      });
    } else {
      this.toastr.warning('Fill All Fields Correctly , please')
    }
  }
}
