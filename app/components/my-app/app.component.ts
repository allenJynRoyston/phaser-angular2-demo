import {Component} from '@angular/core';
import {PhaserComponent}  from '../../components/phaser/phaser'

declare var __phaser:any;

@Component({
    selector: 'my-app',
    templateUrl: './app/components/my-app/main.html',
    directives: [
    PhaserComponent,
  	],
   template: `
     <center>
       <h1>Angular2 - Phaser Demo</h1>
       <phaser (phaser)="phaserLink1($event)" [settings]="{file:'node_modules/phaser/build/phaser.min.js'}"></phaser>
     </center>
   `
})
export class AppComponent {


   //---------------
   phaserLink1(phaser:any){

      var js = document.createElement("script");
          js.type = "text/javascript";
          js.src = 'game/phaser1_demo.js';
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
