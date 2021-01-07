import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {


  users:Array<User>;
  totalUsers:number;
  pageNumber:number;
  constructor(private toastr: ToastrService, public userService: UserService) {
    this.users = [];
    this.totalUsers = 0;
    this.pageNumber = 1;

   }

  ngOnInit(): void {
    this.getData(this.pageNumber);
    // this.showSuccess();
  }

  getData(pageNumber:number) {
    this.userService.getUsers(pageNumber).subscribe(res => {
      this.users = JSON.parse(JSON.stringify(res.data));
      this.totalUsers = res.total || 0;
      console.log(res);
    }, err => {
      if(err.statusText == "Unknown Error"){
        this.toastr.error('Something went wrong, please try again later');
      }
      console.log(err);
    })
  }

  getOtherUserData(event:PageEvent){
    console.log(event);
    this.getData(event.pageIndex + 1)
  }

  goToDetails(){
    console.log('go to details');
  }
}
