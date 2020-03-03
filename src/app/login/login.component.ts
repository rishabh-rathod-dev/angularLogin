import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "email":['', [Validators.required, Validators.email,Validators.pattern('^[A-Za-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      "password": ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-z0-9!@#$%^&]{4,12}$')]]
  });
   }

  ngOnInit(): void {
    
  }

  getLogindata(){
    console.log("model-based form submitted");
    console.log(this.form.value);
  }

}
