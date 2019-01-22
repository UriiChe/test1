import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserProviderService } from '../../services/user-provider.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  user:User;
  constructor( private _userService: UserProviderService) { }

  ngOnInit() {
    this._userService.user$.subscribe(user => {
      if(user) this.user = user;
    });
    console.log(this.user);
  }

}
