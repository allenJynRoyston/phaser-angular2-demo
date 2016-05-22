# Angular2/Phaser Seed Project

### What Am I?!
I created this seed project for the Angular Attack 2016 contest and I wanted to share it as soon as I found a way to simplify it and clean it up.  [(Check out our submission here - and if you could, please vote for us!)](http://totallynotarobot.2016.angularattack.io/ "Angular Attack 2016")  If you want to integrate the components needed into an existing project, follow the instructions below in the Integration section.
<br>
This repo is based off our submission and includes everything you need to get started.
  - Phaser component
  - Angular 2 Quickstart project

### Install
  - Download or clone this repo.
  - npm install
  - npm start
  - make your game!
  - Should load the default Angular2 quickstart page, initiate a preload, and then present an animated Phaser logo.


### Required
  - NPM
  - Typescript (Not required by highly suggested)


### Integration
If you want to include Phaser in your own project, you'll have do the following steps.  You shouldn't have to alter any files; just follow the following instructions.

1.) Grab the Phaser component and place it into your own project.  It can be found in <strong>app/components/phaser</strong> <br>
2.)  Include it in your project.  
```javascript
import {PhaserComponent}  from '[folderLocation]/phaser/phaser'
```
<br>
3.)  Include it in your components directives.
```javascript
@Component({
    directives: [
       PhaserComponent,
  	]
})
```
<br>
4.)  Include it in your html as such: 
```html
<phaser (phaser)="phaserLink1($event)" [settings]="{file:'node_modules/phaser/build/phaser.min.js'}"></phaser>
```
<br>
4a.)  <strong>Make sure you've downloaded the phaser source code.</strong>    It's included in the repo but might not be in your project.  Include the file location in the <strong>settings</strong> parameter.<br>
4b.)  You can install it from NPM:  npm install phaser --save-dev

<br>
5.)  In your component, make sure you include the following script.
````script
   //---------------
   phaserLink1(phaser:any){

      var js = document.createElement("script");
          js.type = "text/javascript";
          js.src = 'game/phaser1_demo.js';  // this is where your game file is located, recommended you use the seed game file included in the git repo since it has custom initiating/destroy methods
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
````

6.)  It's <strong> HIGHLY RECOMMENDED </strong> you use a seed project game included in the repo.  It has custom init and destroy methods needed to get this to work with Angular 2.  

<br>




### Version
1.0.1



### Live Demo 
[Check it out](http://totallynotarobot.2016.angularattack.io/ "Angular Attack 2016")


### Dependencies
- none (Phaser is included in the package.json)



### Parameters



License
----

MIT - go nuts y'all.
