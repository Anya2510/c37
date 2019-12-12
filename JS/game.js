class Game {
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
database.ref('/').update({
    gameState:state
})
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount()
            }
            
            form=new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car2 = createSprite(120,200)
        car3 = createSprite(140,200)        
        car4 = createSprite(160,200) 
        cars = [car1,car2,car3,car4]
    }
    play (){
        form.hide();
        textSize(30);
        text("GAME START",120,100)
        Player.getPlayerInfo();
        if (allPlayers!==undefined){
       //var display_position = 130
      //indx of the array 
       var index = 0
     //x & y position of the car
     var x = 0;
     var y;
       for (var plr in allPlayers){
           //adding 1 to the index for every loop
           index = index + 1
           //position the cars away from each other
           x = x + 200
           //using data from the database to display the cars in y direction
           y = displayHeight - allPlayers [plr].distance;
           cars[index-1].x = x;
           cars[index-1].y = y;

            if (index === player.index){
                cars[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
            }
                
       
            }
        }
        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance +=50;
            player.update();
            
        }
        drawSprites();
        }
    }
