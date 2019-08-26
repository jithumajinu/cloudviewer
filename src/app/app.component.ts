import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

//declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cloudviewer';
  isOnline: boolean;
  constructor(private router: Router) { 
    this.isOnline = true;
  }

  ngOnInit() {

    this.onEvents();
/*
    // jquery enabled
    $(document).ready(() => {
      $('#elementId').css({'background-color': 'yellow', 'font-size': '200%'});
    });
    // close jquery 
    */
     
  }


  onEvents() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/': break;
          case '/hash' :
            break;
        }
      }
    });
  }
}
