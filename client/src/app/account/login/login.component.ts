import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/core/route.service';
import {LoginService} from "./login.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private route: RouteService, private loginService: LoginService) { }

  ngOnInit() {
  }
  resp:any = {};
  loginSubmit(event: Event){
    //this.route.routeChange('home');
    this.loginService.getUsers().subscribe((data: any) => {console.log(data); this.resp = data.a});
  }

}
