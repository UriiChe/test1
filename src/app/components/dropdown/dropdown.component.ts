import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './../../models/user';
import { Router } from '@angular/router';
import { UserProviderService } from '../../services/user-provider.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @ViewChild('form') form;
  user: User ={
    id: String(new Date().getTime()),
    email: '',
    password: ''
  }
  error: string;
  constructor(public router: Router,
              private _userService: UserProviderService,
              private _httpService: HttpService) { }
  logIn(){
    const currentUser = Object.assign({}, this.user);
    this._userService.sendUser(currentUser);
    this._httpService.sendUser(currentUser).subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error.message);
    });
    this.form.reset();
    this.router.navigate(['page']);
  }
  ngOnInit() {
  };

}
