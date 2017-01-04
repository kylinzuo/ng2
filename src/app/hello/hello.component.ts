import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <form #formRef='ngForm' (ngSubmit)='onSubmit(formRef.value)'>
        <fieldset ngModelGroup='hello'>
          <input type="text"
            name = 'username'
            [(ngModel)] = 'username'
            #usernameRef = 'ngModel'
            required
            minlength = '3'
            />
          {{usernameRef.errors | json}}
          <div *ngIf='usernameRef.errors?.required'>this is required</div>
          <div *ngIf='usernameRef.errors?.minlength'>should be at least 3 charactors</div>
          <input type="password"
            name = 'password'
            [(ngModel)] = 'password'
            #passwordRef = 'ngModel'
            required
            />
          {{passwordRef.errors | json}}
          <button type='submit'>Login</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `]
})
export class HelloComponent implements OnInit {
  username : string = ''
  password : string = ''
  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log('auth result is:'
      + this.service.loginWithCredentials(formValue.login.username, formValue.login.password))
  }

}
