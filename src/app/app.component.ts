import { Component, AfterViewInit } from '@angular/core';
import { AuthGuard } from './guard/auth-guard.service';
import { NavbarComponent } from './template/navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestão de Crédito';
  href: string | undefined;


  constructor(private navBar:NavbarComponent ){

  }
  ngOnInit(){

  }

}
