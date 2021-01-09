import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user.service';

import { CreateUserComponent } from './create-user.component';

describe('CreateUserComponent', () => {
    let component: CreateUserComponent;
    let fixture: ComponentFixture<CreateUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateUserComponent],
            imports: [ToastrModule.forRoot(),
                HttpClientModule,
                HttpClientTestingModule,
                AppRoutingModule,
                MatGridListModule,
                ReactiveFormsModule,
            ],
            providers: [UserService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

