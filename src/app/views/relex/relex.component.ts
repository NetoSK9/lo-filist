import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-relex',
  templateUrl: './relex.component.html',
  styleUrls: ['./relex.component.css']
})
export class RelexComponent implements OnInit {

  constructor(
    private router: Router,
    private appRputingModule: AppRoutingModule
  ) { }

  ngOnInit(): void {
  }

  goToHome():void{
    this.appRputingModule.goToHome(this.router);
  }

}
