import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesNext: Live[]=[];
  livesPrevious: Live[]=[];
  livesNextReady: boolean = false;
  livesPreviousReady: boolean = false;
  url: string = '';
  

  constructor(
    private rest: LiveService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
   this.getLives();
  }

  getLives(){
    this.rest.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
      this.livesNext.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
      this.livesNextReady = true;
    });

    this.rest.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      this.livesPrevious.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
      });
      this.livesPreviousReady = true;
    });
  }

}
