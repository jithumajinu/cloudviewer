import { Component, OnInit } from '@angular/core';

declare var jQuery: any
declare const myTest2: any;
declare const turn: any;
declare const opts: any;


 
@Component({
  selector: 'app-cloudpicviewer',
  templateUrl: './cloudpicviewer.component.html',
  styleUrls: ['./cloudpicviewer.component.scss']
})
export class CloudpicviewerComponent implements OnInit {
  constructor() { }
  ngOnInit() {

    (function ($) {
      $(document).ready(function(){
        // start
        console.log("Hello from jQuery!");


        $(window).ready(function() {
          $('#magazine').turn({
                              display: 'double',
                              acceleration: true,
                              gradients: !$.isTouch,
                              elevation:50,
                              when: {
                                  turned: function(e, page) {
                                      //console.log('Current view: ', $(this).turn('view'));
                                  }
                              }
                          });
      });
      
      
      $(window).bind('keydown', function(e){
          
          if (e.keyCode==37)
              $('#magazine').turn('previous');
          else if (e.keyCode==39)
              $('#magazine').turn('next');
              
      });
          

        

        //  close
      });
    })(jQuery); 

  //  myTest2();

  }


  onClick() {
    myTest2();
  }


}
