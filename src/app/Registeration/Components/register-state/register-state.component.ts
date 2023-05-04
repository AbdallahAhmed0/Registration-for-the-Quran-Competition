import { Component, OnInit } from '@angular/core';
import { users } from './../../Models/users';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register-state',
  templateUrl: './register-state.component.html',
  styleUrls: ['./register-state.component.css']
})
export class RegisterStateComponent implements OnInit {

  user!:users;

  constructor(private route:Router) { }

  ngOnInit(): void {
    if(!history.state.data){
      this.route.navigate(['/']);
    }
    this.user = history.state.data;
  }

}
