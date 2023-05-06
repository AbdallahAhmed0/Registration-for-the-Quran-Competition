import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterationService } from '../../Services/registeration.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  myForm!:FormGroup;
  Age!:number;
  birthDate!:Date;
  gender!:string;
  state:string ='';
  consoleError:any = '';

  constructor(private fb: FormBuilder,
              private registerService:RegisterationService,
              private route:Router,
              private datePipe: DatePipe) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      level: ['', [Validators.required,Validators.max(8),Validators.min(1)]],
      nationalId: ['', [Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      darName: ['', Validators.required],
      phone: ['', [Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      city: ['', Validators.required],
    });
    this.nationalId?.valueChanges.subscribe(data =>{
      if(data.length == 14){
        if(this.validateBirthDate(data)){
          this.birthDate = this.getBirthDate(data);
          this.consoleError = '';
        }
        else{
          this.consoleError = ` يجب إدخال رقم قومي صحيح وإلا لن تتمكن من التسجيل`
        }
        this.Age = this.getAge(data);
        this.gender = this.getGender(data);

        if(this.level?.value != ''){
          this.state = this.getState(data,this.level?.value);
        }
      }
    });
    this.level?.valueChanges.subscribe(data =>{
      if(this.nationalId?.value != ''){
        this.state = this.getState(this.nationalId?.value,data);
      }
    });

  }

  // onSubmit(){
  //   if (this.myForm.valid) {
  //     this.registerService.addUser(this.myForm.value).subscribe(
  //       data => {
  //       },
  //       error => {
  //         // Handle error
  //         if(error == 'Error: National ID must be unique and consist of 14 digits'){
  //           this.consoleError = 'الرقم القومي لا يجب أن يكون قد تم التسجيل به مسبقا';
  //         }
  //       }
  //     );
  //     setTimeout(()=>{
  //       console.log(this.consoleError)
  //       if(this.consoleError == ''){
  //         this.route.navigate(['Register/state'],{ state: { data: this.myForm.value } })
  //       }
  //     },1000)

  //   }
  // }

onSubmit(){
  if (this.myForm.valid) {
    const observer={
      next: (answer:any) => {
        // Handle success
        this.route.navigate(['Register/state'],{ state: { data: this.myForm.value } })
      },
      error: (error:any)=>{
        // Handle error
        if(error == 'Error: National ID must be unique and consist of 14 digits'){
          this.consoleError = 'الرقم القومي لا يجب أن يكون قد تم التسجيل به مسبقا';
        }
      }
      }
    this.registerService.addUser(this.myForm.value).subscribe(observer);
  }
}
  // to prevent write any char in phone and nationalId
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
  getBirthDate(nationalId: string): Date {
    let year, day, month;


if (nationalId.charAt(0) == '2') {
  year = 1900;
} else {
  year = 2000;
}

year += parseInt(nationalId.substring(1, 3));
month = parseInt(nationalId.substring(3, 5));
day = parseInt(nationalId.substring(5, 7));

// Month must be between 1 and 12 and Day must be between 1 and 31
this.consoleError = (month < 1 || month > 12 || day < 1 || day > 31) ? 'يجب إدخال رقم قومي صحيح وإلا لن تتمكن من التسجيل' : '';


    return new Date(year, month - 1, day);
  }
  validateBirthDate(data: any): boolean {
    const birthDate = this.getBirthDate(data);
    const now = new Date();
    return birthDate <= now;
  }
  getAge(nationalId: string): number {
    const birthDate = this.getBirthDate(nationalId);
    const currentDate = new Date();
    return this.calculateAge(birthDate, currentDate);
  }

  getGender(nationalId: string): string {
    if (parseInt(nationalId.substring(12, 13), 10) % 2 === 0) {
      return "أنثى";
    } else {
      return "ذكر";
    }
  }

  getState(nationalId: string, level: string): string {
    enum Level {
      L1 = 20,
      L2 = 18,
      L3 = 15,
      L4 = 12,
      L5 = 10,
      L6 = 8,
      L7 = 6,
      L8 = 5,
    }
    const key = `L${level}` as keyof typeof Level;
    const ageLevel = Level[key];

    const Age =this.getAge(nationalId);
    if(Age <= ageLevel){
      return '';
    }
    else{
      return ` أكبر سن مسموح به للمستوى ${level} هو ${ageLevel} سنة`
    }

  }

  calculateAge(startDate: Date, endDate: Date): number {
    const diffInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
    const msInYear = 1000 * 60 * 60 * 24 * 365.25; // 365.25 days in a year to account for leap years
    const ageInYears = Math.floor(diffInMilliseconds / msInYear);
    return ageInYears;
  }

get firstName(){
return this.myForm.get('firstName');
}
get lastName(){
  return this.myForm.get('lastName');
}
get level(){
  return this.myForm.get('level');
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
get city(){
  return this.myForm.get('city');
}


}
