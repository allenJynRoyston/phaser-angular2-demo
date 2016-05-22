//--------------
__phaser = {

    gameObj: null,

    //-------------------
    game:{

      //-------------------
      init(canvasEle, appComponent){
              // create game object
              var game = new Phaser.Game(800, 500, Phaser.AUTO, canvasEle, { preload: preload, update: update });
              var gameState = "preload"

              // assign it
              __phaser.gameObj = game;



            //-----------------------  PRELOAD
            function preload() {

                // set canvas color
                game.stage.backgroundColor = '#95a5a6';

                // load images/sounds/scripts
                game.load.image('phaser_logo', 'game/phaser_logo.png')

                // preloader events
                game.load.onLoadStart.add(loadStart, this);
                game.load.onFileComplete.add(fileComplete, this);
                game.load.onLoadComplete.add(loadComplete, this);
                game.load.enableParallel = true;
            }
            //-----------------------


            //-----------------------
            function loadStart() {

                var fragmentSrc = [
                    "precision mediump float;",
                    "uniform vec2      resolution;",
                    "uniform float     time;",
                    "#define PI 90",
                    "void main( void ) {",
                    "vec2 p = ( gl_FragCoord.xy / resolution.xy ) - 0.5;",
                    "float sx = 0.3 * (p.x + 0.8) * sin( 900.0 * p.x - 1. * pow(time, 0.55)*5.);",
                    "float dy = 4./ ( 500.0 * abs(p.y - sx));",
                    "dy += 1./ (25. * length(p - vec2(p.x, 0.)));",
                    "gl_FragColor = vec4( (p.x + 0.1) * dy, 0.3 * dy, dy, 1.1 );",
                "}"];
                preload_filter = new Phaser.Filter(game, null, fragmentSrc);
                preload_filter.setResolution(800, 500);
                preload_sprite = game.add.sprite();
                preload_sprite.width = 800;
                preload_sprite.height = 500;
                preload_sprite.filters = [ preload_filter ];


                // text
                loadingtext = game.add.text(game.world.centerX, game.world.centerY/2, "", {fill: "#fff"});
                loadingtext.anchor.set(0.5);
                loadingPercentage = game.add.text(game.world.centerX, game.world.centerY - 100, "", {fill: "#fff"});
                loadingPercentage.anchor.set(0.2);

            }
            //-----------------------

            //-----------------------
            function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
            	loadingtext.setText("Loading...");
                loadingPercentage.setText(progress + "%")
            }
            //-----------------------

            //-----------------------
            function preloaderUpdate(){
                preload_filter.update();
            }
            //-----------------------

            //-----------------------
            function loadComplete() {
            	loadingtext.setText("All assets loaded");
                loadingPercentage.setText("100%")

                // add slight delay before starting game
                game.time.events.add(Phaser.Timer.SECOND * 3, function(){
                    preload_filter.destroy();
                    preload_sprite.destroy();
                    loadingtext.destroy();
                    loadingPercentage.destroy();
                    startGame()
                }, this).autoDestroy = true;
            }
            //-----------------------


            //-----------------------
            function startGame(){
                gameState = "gameplay"

                loadingtext = game.add.text(game.world.centerX, game.world.centerY/2, "Game Started", {fill: "#fff"});
                loadingtext.anchor.set(0.5);
            }
            //-----------------------

            //-----------------------
            function gameplayUpdate(){
                // update filter
            }
            //-----------------------


            //-----------------------  UPDATE
            function update() {

                // list of gamestates and their loops
                if(gameState == "preload"){ preloaderUpdate() }
                if(gameState == "gameplay"){ gameplayUpdate() }

            }
            //-----------------------



      },



    },
    //-------------------


    //-------------------
    destroyGame(callback){
          this.gameObj.destroy();
          callback();
    }
    //-------------------


}
//--------------
