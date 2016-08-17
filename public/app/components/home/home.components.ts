import { Component } from '@angular/core';
import {NG2_PHASER}  from '../../../node_modules/ang2-phaser/ng2phaser'

declare var __phaser:any;

@Component({
  selector: 'my-app',
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
export class HomeComponent {

  //---------------
  phaserLink1(phaser:any){

     var js = document.createElement("script");
         js.type = "text/javascript";
         js.src = '../../../gameDemo/demo.js';
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
