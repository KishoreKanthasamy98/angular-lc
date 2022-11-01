import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  async Login(formData:any, success: any) {
    return this.http.post<any>("http://localhost:43561/angular-lc/api/login",formData).subscribe(res => {
      let obj = res as any; if (success) { success(obj); }
    }, err => {
      console.log(err);
    });
  }
}
