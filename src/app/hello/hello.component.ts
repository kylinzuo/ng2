import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <input type="text" [(ngModel)] = 'username'>
      <input type="password" [(ngModel)] = 'password'>
      <button (click)="onClick()">Login</button>
    </div>
  `,
  styles: []
})
export class HelloComponent implements OnInit {
  username : string = ''
  password : string = ''
  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  onClick() {
    console.log('auth result is:' + this.service.loginWithCredentials(this.username, this.password))
  }

}
