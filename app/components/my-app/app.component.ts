import {Component} from '@angular/core';
import {NG2_PHASER}  from '../../../node_modules/ang2-phaser/ng2phaser'


declare var __phaser:any;

@Component({
    selector: 'my-app',
    templateUrl: './app/components/my-app/main.html',
    directives: [
      NG2_PHASER
  	],
    template: `
       <center>
         <h2> Phaser + Angular 2 Demo</h2>
         <phaser (phaser)="phaserLink1($event)"></phaser>
       </center>
    `
})
export class AppComponent {

   //---------------
   phaserLink1(phaser:any){

      var js = document.createElement("script");
          js.type = "text/javascript";
          js.src = '../../../node_modules/ang2-phaser/game_demos/phaser1_demo.js';
          document.body.appendChild(js);
          js.onload = function(){
             __phaser.game.init(phaser.container, this);
          }
   }
   //---------------

   //---------------
   destroyGame(){
      __phaser.destroyGame(function(){
            // do something
      });
   }
   //---------------


}
