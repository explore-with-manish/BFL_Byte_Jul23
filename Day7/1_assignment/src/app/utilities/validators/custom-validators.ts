import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static ageRange(min = 18, max = 60): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if ((control.value !== '') && (isNaN(control.value) || control.value < min || control.value > max)) {
                return { 'ageRange': true };
            } else {
                return null;
            }
        }
    }
}