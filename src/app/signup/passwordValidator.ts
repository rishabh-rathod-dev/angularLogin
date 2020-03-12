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