import { FormGroup } from "@angular/forms";

export function DateBefore(controlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    let today: Date = new Date();
    let givenDate = new Date(control.value);

    if (givenDate.toString() == "Invalid Date" || givenDate >= today) {
      control.setErrors({ dateBefore: true });
    } else {
      control.setErrors(null);
    }
  };
}
