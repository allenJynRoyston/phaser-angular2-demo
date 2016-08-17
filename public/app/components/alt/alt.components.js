"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2phaser_1 = require('../../../node_modules/ang2-phaser/ng2phaser');
var AltComponent = (function () {
    function AltComponent() {
    }
    //---------------
    AltComponent.prototype.phaserLink1 = function (phaser) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = '../../../node_modules/ang2-phaser/game_demos/phaser2_demo.js';
        document.body.appendChild(js);
        js.onload = function () {
            __phaser.game.init(phaser.container, this);
        };
    };
    //---------------
    //---------------
    AltComponent.prototype.destroyGame = function () {
        __phaser.destroyGame(function () {
            // do something
        });
    };
    //---------------
    //---------------
    AltComponent.prototype.ngOnDestroy = function () {
        this.destroyGame();
    };
    AltComponent = __decorate([
        core_1.Component({
            selector: 'about-home',
            directives: [
                ng2phaser_1.NG2_PHASER
            ],
            template: "\n    <center>\n      <h1>Angular2 - Phaser Demo</h1>\n      <phaser (phaser)=\"phaserLink1($event)\" ></phaser>\n    </center>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AltComponent);
    return AltComponent;
}());
exports.AltComponent = AltComponent;
//# sourceMappingURL=alt.components.js.map