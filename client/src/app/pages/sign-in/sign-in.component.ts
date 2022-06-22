import { Component, inject, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "@core/services/auth/auth.service";

interface SignInForm {
  email: FormControl<string> | any;
  password: FormControl<string> | any;
}

@Component({
  selector: 'eac-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class SignInComponent implements OnInit {
  public signInForm!: FormGroup<SignInForm>;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  public ngOnInit(): void {
    this.signInForm = this.fb.group<SignInForm>({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  public onSubmit(): void {
    this.authService.signIn(this.signInForm.value);
  }
}
