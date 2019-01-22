import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {
  private _userProvider = new BehaviorSubject<User>({id: "", email: "", password: ""});
  user$ = this._userProvider.asObservable();
  user: User;
  constructor() { }
  sendUser(user){
    return this._userProvider.next(user);
  }
}
