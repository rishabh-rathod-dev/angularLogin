import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { passwordValidator } from './passwordValidator'
let users = [];
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email:['', [Validators.required, Validators.email,Validators.pattern('^[A-Za-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['', passwordValidator]
  });
 }

 signupFunction(){
   let user = [this.form.controls.email.value,this.form.controls.password.value]
   // user.push(...userEmail,...userPass)
   console.log(user,"users data")
   users.push(user)
   console.log(users,"users data")
   // localStorage.setItem('users', JSON.stringify(users));
   localStorage.setItem('userEmail',JSON.stringify(users))
   // console.log(JSON.stringify(users),"password");
   console.log(localStorage.getItem('userEmail'),"userEmail array")
   }
  ngOnInit(): void {
    
  }

}
