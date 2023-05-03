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
      level: ['', [Validators.required,Validators.max(8),Validators.min(1)]],
      nationalId: ['', [Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      darName: ['', Validators.required],
      phone: ['', [Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
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
  // to prevent write any char in phone and nationalId
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }


get firstName(){
return this.myForm.get('firstName');
}
get lastName(){
  return this.myForm.get('lastName');
}
get level(){
  return this.myForm.get('lastName');
}
get nationalId(){
  return this.myForm.get('nationalId');
}
get darName(){
  return this.myForm.get('darName');
}
get phone(){
  return this.myForm.get('phone');
}


}
