import { AbstractControl } from '@angular/forms'

export function passwordValidator (control : AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
     const regex = new RegExp (/^(?=\D*\d)(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=.*[!@#$%^&*]).{4,10}$/)
     if(!regex.test(control.value)){
       return {
         isError: true
       };
     }
    }
    return null
   }
  //  export function dobVlidator (control : AbstractControl){
  //   if(control && (control.value !== null || control.value !== undefined)){
  //     var today = new Date();
  //     var dob = new Date(control.value);
  //     var minAge = today.getFullYear()-18;
  //     var maxAge = today.getFullYear()-50;
  //     console.log(dob.getFullYear(),"control value")
  //     console.log(minAge,"min age", maxAge,"max age")
  //     if(control.value > minAge && control.value < maxAge){
  //       return {
  //         isError: false
  //       };
  //   }else{
  //     return {
  //       isError: true
  //     };
  //   }
  // }
  //   return null
  //  }