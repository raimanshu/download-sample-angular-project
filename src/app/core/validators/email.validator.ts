import { AbstractControl } from "@angular/forms";
import { EMAIL_REGEX } from "../regexes/index.regex";

export class CustomValidator {
    static EmailValidator(control: AbstractControl): { [key: string]: any } | null {
        let regularExp = EMAIL_REGEX;
        let cValue = control.value;
        cValue = (cValue || '').toString().trim();
        if (!cValue)
          return { required: true };
      
        return regularExp.test(cValue) ? null : {
          invalidEmail: true 
        };
          
    }
}
