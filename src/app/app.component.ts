import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration-for-the-Quran-Competition';
    loading: boolean = true;
constructor(private http:HttpClient){}
  ngOnInit() {
    this.getDataFromServer();
  }
  getDataFromServer() {
    this.http.get('https://www.ahbabkhatamelmorsalen.com/').pipe(
      catchError(error => {
        return throwError('An error occurred while retrieving the data.');
      })
    ).subscribe(response => {
      this.loading=false;
    });
  }

}
