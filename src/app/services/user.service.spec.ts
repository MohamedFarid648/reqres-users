import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UsersService', () => {
  let service: UserService;
  let originalTimeout: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ], providers: [UserService]

    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });



  // beforeEach(function() {
  //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  // });

  // afterEach(function() {
  //   jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  // });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers(1) should return object has {page:1}',
    () => { //done:DoneFn
      service.getUsers(1).subscribe(value => {
        console.log(value);
        expect(value).toContain({ page: 1 });
        expectAsync(value).toBeResolved().then(val=>{ expect(val).toContain({ page: 1 });})
        //done();
      });
    });

  it('getUser(2) should return {id:2}', () => {
    let value;
    service.getUser(2).subscribe(val => {
      value = val;
      expect(value).toContain({ id: 2 });
    })
  });

  it('addUser(obj) should return obj', () => {
    let value;
    service.addUser({job:'developer',email:'test@gmail.com'}).subscribe(val => {
      value = val;
      expect(value).toContain({job:'developer',email:'test@gmail.com'});
    })
  });

  it('editUser(obj) should return obj', () => {
    let value;
    service.editUser({job:'developer',email:'test@gmail.com'}).subscribe(val => {
      value = val;
      expect(value).toContain({job:'developer',email:'test@gmail.com'});
    })
  });

  it('deleteUser(2) should return null', () => {
    let value;
    service.deleteUser(2).subscribe(val => {
      value = val;
      expect(value).toBe(null);
    })
  });
});

// describe('UserService', () => {
//   let service: UserService;
//   beforeEach(() => { service = new UserService(); });

//   it('#getValue should return real value', () => {
//     expect(service.getValue()).toBe('real value');
//   });

//   it('#getObservableValue should return value from observable',
//     (done: DoneFn) => {
//     service.getObservableValue().subscribe(value => {
//       expect(value).toBe('observable value');
//       done();
//     });
//   });

//   it('#getPromiseValue should return value from a promise',
//     (done: DoneFn) => {
//     service.getPromiseValue().then(value => {
//       expect(value).toBe('promise value');
//       done();
//     });
//   });
// });