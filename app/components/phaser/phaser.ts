// core
import {Component, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

declare var Phaser:any;
//------------------------------------
@Component({
  selector: 'phaser',
  directives: [CORE_DIRECTIVES],
  template: ""
})
export class PhaserComponent {

  //--------------
  public selfRef:any;

  @Output() phaser = new EventEmitter();
  @Input() settings:any;
  @Input() layout:any;

   //--------------
   constructor(private el: ElementRef) {
      this.selfRef = el.nativeElement;
   }
   //--------------

  //--------------
  ngOnInit(){
    var t = this;
    var alreadyLoaded = false;
    var allScripts = document.getElementsByTagName("script");
    for(var i = 0; i < allScripts.length; i++){
      var str = allScripts[i].src;
      if (str.indexOf(t.settings.file) >= 0){
        alreadyLoaded = true;
      }
    }

    if(alreadyLoaded){
      var scriptLoadedTest =  function(){
        setTimeout(function(){
          try {
              var test = new Phaser.Game();
              clearInterval(this)
          }
          catch(err) {}
          finally{
              if(test != undefined){
                t.initPhaser();
              }
              else{
                scriptLoadedTest()
              }
          }
        }, 1)
      }
      var intv = scriptLoadedTest();
    }
    else{
      var js = document.createElement("script");
          js.type = "text/javascript";
          js.src = t.settings.file;
          document.body.appendChild(js);
          js.onload = function(){
              t.initPhaser()
          }
    }


  }
  //--------------

  //--------------
  initPhaser(){
    this.phaser.emit({container: this.selfRef})
  }
  //--------------


}
//------------------------------------
