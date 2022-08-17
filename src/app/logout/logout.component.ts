import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'mstr-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    console.log("Stuff to do when starting to log out.");
    localStorage.removeItem('session_token');
    this.router.navigate(['/welcome']);
  }



}
