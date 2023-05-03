import { Component, OnInit } from '@angular/core';
import { users } from './../../Models/users';

@Component({
  selector: 'app-register-state',
  templateUrl: './register-state.component.html',
  styleUrls: ['./register-state.component.css']
})
export class RegisterStateComponent implements OnInit {

  user!:users;

  constructor() { }

  ngOnInit(): void {
    this.user = history.state.data;
  }

}
