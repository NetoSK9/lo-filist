import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'lofi-site';
  constructor(
    private router: Router,
    private appRputingModule: AppRoutingModule
) { }
  ngOnInit(): void {
    this.goToHome();
  }
  goToHome():void{
    this.appRputingModule.goToHome(this.router);
  }
}
