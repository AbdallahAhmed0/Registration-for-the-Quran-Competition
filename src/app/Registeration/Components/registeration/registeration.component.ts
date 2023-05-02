import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  myForm!:FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      level: ['', Validators.required],
      nationalId: ['', Validators.required],
      image: ['', Validators.required],
      darName: ['', Validators.required],
      phone: ['', Validators.required],
      registrationDate: ['', Validators.required]
    });
  }

}
