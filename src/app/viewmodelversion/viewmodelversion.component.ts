import { Component, OnInit,ElementRef,TemplateRef, ViewChild } from '@angular/core';
import { ScriptService } from 'ngx-script-loader';

//declare const loadRootApp: any;
//declare const myTest3: any;

declare const loadApp: any;

@Component({
  selector: 'app-viewmodelversion',
  templateUrl: './viewmodelversion.component.html',
  styleUrls: ['./viewmodelversion.component.scss']
})
export class ViewmodelversionComponent implements OnInit {


  //@ViewChild('menuContainer', { static: false }) menuContainer!: ElementRef;
  

  @ViewChild('menuContainer', { static: false }) menuContainer: ElementRef;

  constructor(private scriptService: ScriptService) {
  }
  ngOnInit() {

   // loadRootApp();
  // this.loadScripts();
  
  //this.serviceExample();
  //loadrootapp();
  loadApp();
  }

  
  // "src/app/shared/scripts/magazine.js" 
  /*
  showWidget = false;
  spWidgetAttributes = {
    'data-location': 'spiros-restaurant--lounge',
    'data-api_key': 'ke09z8icq4xu8uiiccighy1bw',
    'id': 'singleplatform-menu'
  };

  serviceExample() {
    this.scriptService.loadScript('assets/js/test.js').subscribe(this.widgetLoaded, this.widgetLoadFailed);
  }

  widgetLoaded(event: Event) {
    console.log('Loaded', event);
    loadApp();
  }

  widgetLoadFailed(event: Event) {
    console.log('Failed', event);
  }

  */

}
