import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/service/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private login:LogInService) { }
  remember = false;
  email: String = "";
  password: String = "";
  submit = false;
  emailPat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  passwordPat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  ngOnInit() {
    this.remember = false;
    this.email = "";
    this.password = "";
    this.submit = false;
  }

  onSubmit() {
    var formdata = new FormData()
    formdata.append("Email", JSON.stringify(this.email))
    formdata.append("Password", JSON.stringify(this.password))
    this.login.Login(formdata, (data: any) => {
     console.log(data)
    })
  }
  validation() {
    if (this.emailPat.test(this.email.toString().trim())&&this.passwordPat.test(this.password.toString().trim())) 
      this.submit=true;
  }

}
