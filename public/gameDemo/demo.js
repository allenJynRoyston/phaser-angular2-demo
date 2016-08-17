//--------------
__phaser = {

    gameObj: null,

    //-------------------
    game:{

      //-------------------
      init(canvasEle, appComponent){
              // create game object
              var game = new Phaser.Game(800, 500, Phaser.AUTO, canvasEle, { preload: preload, create: create, update: update });
              var gameState = "preload"

              // assign it
              __phaser.gameObj = game;



            //-----------------------  PRELOAD
            function preload() {

                // set canvas color
                game.stage.backgroundColor = '#95a5a6';

                // load images/sounds/scripts
                game.load.image('phaser_logo', '../../../gameDemo/phaser_logo.png')

                // preloader events
                game.load.onLoadStart.add(loadStart, this);
                game.load.onFileComplete.add(fileComplete, this);
                game.load.onLoadComplete.add(loadComplete, this);
                game.load.enableParallel = true;
            }
            //-----------------------

            //-----------------------  CREATE
            function create() {


            }
            //-----------------------


            //-----------------------
            function loadStart() {
                // text
                loadingtext = game.add.text(game.world.centerX, game.world.centerY/2, "");
                loadingtext.anchor.set(0.5);
                loadingPercentage = game.add.text(game.world.centerX, game.world.centerY, "");
                loadingPercentage.anchor.set(0.5);
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
                // upadate cycle for anything in preload state
            }
            //-----------------------

            //-----------------------
            function loadComplete() {
            	loadingtext.setText("All assets loaded");
                loadingPercentage.setText("100%")

                // add slight delay before starting game
                game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                    loadingtext.destroy();
                    loadingPercentage.destroy();
                    startGame()
                }, this).autoDestroy = true;
            }
            //-----------------------


            //-----------------------
            function startGame(){
                gameState = "gameplay"

                // define sprite
                sprite = game.add.sprite(0, 0, 'phaser_logo');
                sprite.width = 800;
                sprite.height = 600;

                // define fragment
                var customUniforms = {
                    iChannel0: { type: 'sampler2D', value: sprite.texture, textureData: { repeat: true } }
                };
                var fragmentSrc = [
                    "precision mediump float;",
                    "uniform float     time;",
                    "uniform vec2      resolution;",
                    "uniform sampler2D iChannel0;",
                    "void main( void ) {",
                        "vec2 uv = gl_FragCoord.xy / resolution.xy;",
                        "uv.y *= -1.0;",
                        "uv.y += (sin((uv.x + (time * 0.5)) * 10.0) * 0.1) + (sin((uv.x + (time * 0.2)) * 32.0) * 0.01);",
                        "vec4 texColor = texture2D(iChannel0, uv);",
                        "gl_FragColor = texColor;",
                    "}"
                ];
                // apply filter to sprite
                filter = new Phaser.Filter(game, customUniforms, fragmentSrc);
                filter.setResolution(200, 150);
                sprite.filters = [ filter ];

            }
            //-----------------------

            //-----------------------
            function gameplayUpdate(){
                // update filter
                filter.update();
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
