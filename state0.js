var demo = {} , centerX = 1500 / 2 , centerY = 1000 / 2,adam, speed = 6;
demo.state0 = function(){};

demo.state0.prototype = {
    preload: function(){
        
        game.load.spritesheet('adam','assets/spritessheets/adamSheet.png',240,370);
        game.load.image('tree','assets/backgrounds/treeBG.png');
        
    },
    create: function(){
        
    //PHYSICS game
    game.physics.startSystem(Phaser.Physics.ARCADE);
        
    game.stage.backgroundColor = '#800080';     
        
    addChangeStateEventListeners();
    
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //add BG    
    var treeBG = game.add.sprite(0,0,'tree');
    //add sprite player
    adam = game.add.sprite(centerX,centerY,'adam');
    adam.anchor.setTo(0.5,0.5);
    adam.scale.setTo(0.7,0.7);
    //physics for play
    game.physics.enable(adam);
    adam.body.collideWorldBounds = true;
    //animations adam
    adam.animations.add('walk',[0,1,2,3,4]);
    
    //camera follow player
    game.camera.follow(adam);
    game.world.setBounds(0,0,2813,1000);
    game.camera.deadzone = new Phaser.Rectangle(centerX - 300,0,600,1000);
        
    },
    
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.scale.setTo(0.7,0.7);
            adam.x += speed;
            adam.animations.play('walk',14,true);
        } else 
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.scale.setTo(-0.7,0.7);
            adam.x -= speed;
            adam.animations.play('walk',14,true);
        } else { 
            adam.animations.stop('walk');
            adam.frame = 0;
        }
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
            if(adam.y < 395) {adam.y = 395};
        } else 
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
            if(adam.y > 809) {adam.y = 809};
        }
    } 
};

function changeState(i,stateNumber){
    //console.log(i);
    console.log('state'+ stateNumber);
    game.state.start('state' + stateNumber);
}

function addKeyCallback(key, fun , args){
     game.input.keyboard.addKey(key).onDown.add(fun,null,null,args);
}

function addChangeStateEventListeners(){
addKeyCallback(Phaser.Keyboard.ZERO,changeState,0);
addKeyCallback(Phaser.Keyboard.ONE,changeState,1);
addKeyCallback(Phaser.Keyboard.TWO,changeState,2);
addKeyCallback(Phaser.Keyboard.THREE,changeState,3);
addKeyCallback(Phaser.Keyboard.FOUR,changeState,4);
addKeyCallback(Phaser.Keyboard.FIVE,changeState,5);
addKeyCallback(Phaser.Keyboard.SIX,changeState,6);
addKeyCallback(Phaser.Keyboard.SEVEN,changeState,7);
addKeyCallback(Phaser.Keyboard.EIGHT,changeState,8);
addKeyCallback(Phaser.Keyboard.NINE,changeState,9);
}