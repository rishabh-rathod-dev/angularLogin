import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { passwordValidator } from './passwordValidator'

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
  console.log("model-based form submitted");
  console.log(this.form.controls.password);
  }
  ngOnInit(): void {
    
  }

}
