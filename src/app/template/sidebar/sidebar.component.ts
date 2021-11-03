import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login/login';
import { LoginService } from 'src/app/login/login.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tipoUser:Login|any;

  constructor(
    private logoff:LoginService
  ) { 
    
  }
  
  ngOnInit(): void {
    
  }
  
  Logoff(){
    this.logoff.fazerLogoff()
  }
  
}
