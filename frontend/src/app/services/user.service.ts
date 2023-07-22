import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject =
  new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>;
  constructor() { 
    this.userObservable = this.userSubject.asObservable();
  }
}
