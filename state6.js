demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
    game.stage.backgroundColor = '#80ff00';
    console.log('Stage6');
        addChangeStateEventListeners();
    },
    update: function(){} 
};