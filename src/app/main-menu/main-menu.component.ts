import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'mstr-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  
  showLogoutButton: boolean = false;
  
  constructor(private user: UserService) { }

  ngOnInit(): void {
    if ( this.user.isLoggedIn ) {
      console.log("show logout button");
      this.showLogoutButton = true;
    }
  }

}
