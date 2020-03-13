import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
let userEmail = localStorage.getItem('userEmail');
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required,]]
  });
   }

   authenticate() {
    let email = this.form.controls.email.value;
    console.log(email,"new email")
    console.log(userEmail,"user email is here")
    if(email === userEmail){
      console.log(userEmail,'you are logged in')
    }else{
      console.log(userEmail,"Not Logged in")
    }
  }
  ngOnInit(): void {
    console.log(userEmail,"userEmail")
    if(userEmail!=null && userEmail!=undefined && userEmail!=''){
      this.authenticate();
    }
  }

  

}
