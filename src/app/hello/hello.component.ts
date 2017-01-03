import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <input #usernameRef type="text">
      <input #passwordRef type="password">
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
  `,
  styles: []
})
export class HelloComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onClick(username, password) {
    console.log(`username:${username}`);
    console.log(`password:${password}`)
  }

}
