# Angular2/Phaser Seed Project

### What Am I?!
Want to make a game with the amazing Phaser engine and Angular 2?  Well look no further!
  - Download or clone this repo.
  - npm install
  - npm start
  - make your game!

Should load the default Angular2 quickstart page, initiate a preload, and then present an animated Phaser logo.

### How it Works
If you want to include Phaser in your own project, you'll have do the following steps.  

1.) Grab the Phaser component and place it into your own project.  It can be found in app/components/phaser <br>
2.)  Include it in your project.  
```javascript
import {PhaserComponent}  from '[myComponents]/phaser/phaser'
```
<br>
3.)  Include it in your directives.
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
4a.)  Make sure you've downloaded phaser.js.  Include the file location in the settings.  

<br>
5.)  In your component, make sure you include the following script.
````script
   //---------------
   phaserLink1(phaser:any){

      var js = document.createElement("script");
          js.type = "text/javascript";
          js.src = 'game/phaser1_demo.js';  // this is where your game file is located, recommended you use the seed game file included in the git repo
          document.body.appendChild(js);
          js.onload = function(){
             __phaser.game.init(phaser.container, this);
          }
   }
   //---------------
````




### Version
1.1.2

### Updates
 - v1.1.2 - Eliminated jankiness when using Macbook touchpads and touchscreens.

### Live Demo 
[Check it out](https://allenroyston.herokuapp.com/access/ng-parallax/index.html "Title")


### Dependencies
- None!  (Other than AngularJS).

### NPM / Bower
<code>
npm install ng-parallax --save-dev
</code>
<br>
<code>
bower install ng-simple-parallax --save
</code>

### Installation
Include the module in your scripts.<br>
<code>
&lt;script src="./js/ngParallax.min.js"&gt; &lt;script&gt;
</code>

Add ngParallax in your apps dependencies.<br> 
<code>
var app = angular.module('myApp', ['ngParallax']);
</code>


### Parameters
<code>
&lt;div ng-parallax pattern="'imageLocation'" speed="[0-3]" reverse="[true/false]"&gt; &lt; /div&gt; 
</code>
<br><br>
speed: 0-3              (slowest to fastest)<br>

<ul>
 <li>Setting the speed at 0 will lock the image in place.</li>
 <li> ... unless it's iOS, in which case the image will act as a static image and scroll naturally.</li>
 <li>Using negative numbers reverses the direction.</li>  
 <li>The speed is directly related to the image size, so tinker with your speed to get the right effect.</li>
</ul>


License
----

MIT - go nuts y'all.
