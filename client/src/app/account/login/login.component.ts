import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/core/route.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private route: RouteService) { }

  ngOnInit() {
  }

  loginSubmit(event: Event){
    this.route.routeChange('home');
  }

}
