import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  isSubmitted: boolean;
  isExist: boolean;
  user: User;
  breakpoint: number;


  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, public userService: UserService, public router: Router) {

    this.isSubmitted = false;
    this.isExist = false;
    this.user = new User();
    this.breakpoint = 2;


    if (this.router.getCurrentNavigation()?.extras && this.router.getCurrentNavigation()?.extras.state) {

      this.user.id = JSON.parse(JSON.stringify(this.router.getCurrentNavigation()?.extras.state?.userId));
      console.log(this.user);
      this.isExist = true;
    }
    this.userForm = this.formBuilder.group({
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      job: new FormControl(this.user.job, [Validators.required])
    });


  }

  ngOnInit(): void {
    if (this.isExist) {
      this.getData(this.user.id || 0);
    }
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
  }

  onResize(event: any) {
    console.log(event);
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
  }

  getData(id: number) {
    this.userService.getUser(id).subscribe(res => {
      this.user = JSON.parse(JSON.stringify(res.data));
      console.log(res);
    }, err => {
      this.toastr.error('Something went wrong, please try again later');
      console.log(err);
    })
  }

  getErrorMessageForEmail() {
    if (this.userForm?.controls.email.hasError('required')) {
      return 'Email Value is required';
    }

    return this.userForm?.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageForJob() {
    if (this.userForm?.controls.job.hasError('required')) {
      return 'Job Value is required';
    }
    return '';
  }

  createUser() { //functionName:string ='addUser'
    this.isSubmitted = true;
    console.log(this.user);

    if (this.userForm.valid) {
      if (this.isExist) {
        this.userService['editUser'](this.user).subscribe(res => {
          console.log(res);
          this.toastr.success('Succesfully Updated Operation');
          this.router.navigateByUrl('home');

        }, err => {
          console.log(err);
          this.toastr.error('Something went wrong, please try again later');
        });
      } else {
        this.userService['addUser'](this.user).subscribe(res => {
          console.log(res);
          this.toastr.success('Succesfully Created Operation');
        }, err => {
          console.log(err);
          this.toastr.error('Something went wrong, please try again later');
        });
      }
    } else {
      this.toastr.warning('Fill All Fields Correctly , please')
    }
  }

  deleteUser(id: number) {

    console.log(id);
    this.userService.deleteUser(id).subscribe(res => {
      this.toastr.success('Succesfully Deleted Operation');
      console.log(res);
      this.router.navigateByUrl('home');
    }, err => {
      console.log(err);
      this.toastr.error('Something went wrong, please try again later');
    });
  }
}
