import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterationService } from '../../Services/registeration.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  myForm!:FormGroup;

  constructor(private fb: FormBuilder,
              private registerService:RegisterationService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required,Validators.max(20),Validators.min(5)]],
      level: ['', [Validators.required,Validators.max(8),Validators.min(1)]],
      nationalId: ['', [Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      image: [''],
      darName: ['', Validators.required],
      phone: ['', [Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      registrationDate: ['']
    });
  }
  onSubmit(){
    if (this.myForm.valid) {
      this.registerService.addUser(this.myForm.value).subscribe(
        data => {
        },
        error => {
          console.log(error);
          // Handle error
        }
      );
    }
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
  return this.myForm.get('nationalId');
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
