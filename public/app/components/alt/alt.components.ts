import { Component } from '@angular/core';
import {NG2_PHASER}  from '../../../node_modules/ang2-phaser/ng2phaser'

declare var __phaser:any;
@Component({
  selector: 'about-home',
  directives: [
    NG2_PHASER
  ],
  template: `
    <center>
      <h1>Angular2 - Phaser Demo</h1>
      <phaser (phaser)="phaserLink1($event)" ></phaser>
    </center>
  `
})
export class AltComponent {

  //---------------
  phaserLink1(phaser:any){

     var js = document.createElement("script");
         js.type = "text/javascript";
         js.src = '../../../node_modules/ang2-phaser/game_demos/phaser2_demo.js';
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

  //---------------
  ngOnDestroy() {
    this.destroyGame();
  }
  //---------------

}
