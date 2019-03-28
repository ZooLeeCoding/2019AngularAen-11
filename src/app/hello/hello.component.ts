import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleNavigate() {
    this.router.navigate([{outlets: {
      primary: ['world', 'Zoli', {foo: 'bar'}],
      compose: ['content']
    }}]);
  }

}
