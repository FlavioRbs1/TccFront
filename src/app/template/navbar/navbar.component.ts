import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  corNav:String = "navbar-dark"
  tonalidadeNav = "bg-dark"
  cor:String|any

  constructor() { 
    
  }

  ngOnInit(): void {
  }




}
