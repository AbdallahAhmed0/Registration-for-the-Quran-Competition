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
      image: [''],
      darName: ['', Validators.required],
      phone: ['', Validators.required],
      registrationDate: ['']
    });
  }

get firstName(){
return this.myForm.get('firstName');
}
get lastName(){
  return this.myForm.get('lastName');
}
get age(){
  return this.myForm.get('age');
}
get level(){
  return this.myForm.get('lastName');
}
get nationalId(){
  return this.myForm.get('level');
}
get image(){
  return this.myForm.get('image');
}
get darName(){
  return this.myForm.get('darName');
}
get phone(){
  return this.myForm.get('phone');
}
get registrationDate(){
  return this.myForm.get('registrationDate');
}

}
