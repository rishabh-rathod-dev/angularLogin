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
    let password = this.form.controls.password.value;
    let userExisting = JSON.parse(userEmail);
    for (let i = 0; i <= userExisting.length; i++){     
      if(userExisting[i][0] === email  && userExisting[i][1] === password){        
        console.log(userExisting[i][0], userExisting[i][0],"You are logged in")
        window.location.href="/main";
        return false;
      }
      else{
        console.log("You are not logged in")        
      }
    }
   

   
  }

  ngOnInit(): void {
  }

  

}
