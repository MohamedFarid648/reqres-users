import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user.service';

import { AllUsersComponent } from './all-users.component';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersComponent ],
      imports: [ToastrModule.forRoot(),
         HttpClientModule,
          HttpClientTestingModule,
          AppRoutingModule,
          MatGridListModule,
        ],
      providers:[UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getData(1)', () => {
    // component.getData(1);
    // if(component.users.length > 0){
    //   expect(component.users[0]).toContain({id:1});
    // }
    component.userService.getUsers(1).subscribe(res=>{
        component.users = res.data || [];
        if(component.users.length > 0){
          expect(component.users[0]).toContain({id:1});
        }
    });
  });
});
