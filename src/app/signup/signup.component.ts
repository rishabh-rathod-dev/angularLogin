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
      f_name:['', [Validators.required, Validators.minLength(4)]],
      l_name:['', [Validators.required, Validators.minLength(4)]],
      // dob:['',dobVlidator],
      dob:[''],
      email:['', [Validators.required, Validators.email,Validators.pattern('^[A-Za-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['', passwordValidator]
  });
 }

 signupFunction(){
   console.log(this.form.controls,"controls are here")
   let user = [this.form.controls.email.value,this.form.controls.password.value]
   users.push(user)
   }
  ngOnInit(): void {
    
  }

}
