import { Component, inject, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

interface SignUpForm {
  email: FormControl<string> | any;
  password: FormControl<string> | any;
}

@Component({
  selector: 'eac-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class SignUpComponent implements OnInit {
  public signUpForm!: FormGroup<SignUpForm>;

  private fb = inject(FormBuilder);

  public ngOnInit(): void {
    this.signUpForm = this.fb.group<SignUpForm>({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  public onSubmit(): void {
    console.log(this.signUpForm.value);
  }
}
