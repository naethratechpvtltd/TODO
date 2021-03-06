import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  template: `
    <div class="g-row sign-in">
      <div class="g-col">
      <h1 class="sign-in__heading">Sign in with your below account</h1>               
        <button class="sign-in__button google_ic" (click)="signInWithGoogle()" type="button">Google</button>
        <p><br></p>
        <button class="sign-in__button fb_ic" (click)="signInWithFacebook()" type="button">Facebook</button>
      </div>
    </div>
  `
})
export class SignInComponent {
  constructor(private auth: AuthService, private router: Router) {}

  signInAnonymously(): void {
    this.auth.signInAnonymously()
      .then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/tasks']);
  }
}
