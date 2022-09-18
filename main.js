var canvas= new fabric.Canvas('myCanvas');

block_width=30;
block_height=30;

playerX=10;
playerY=10;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=='80' ){
        console.log("p and shift keys pressed");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keyPressed=='77' ){
        console.log("m and shift keys pressed");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if(keyPressed=='38'){
        console.log('up');
        up();
    }

    if(keyPressed=='39'){
        console.log('right');
        right();
    }

    if(keyPressed=='37'){
        console.log('left');
        left();
    
    }

    if(keyPressed=='40'){
        console.log('down');
        down();
    }

    if(keyPressed=='87'){
        console.log("w");
        new_image("wall.jpg");
    }

    if(keyPressed=='71'){
        console.log("g");
        new_image("ground.png");
    }

    if(keyPressed=='76'){
        console.log("l");
        new_image("light_green.png");
    }

    if(keyPressed=='68'){
        console.log("d");
        new_image("dark_green.png");
    }

    if(keyPressed=='84'){
        console.log("t");
        new_image("trunk.jpg");
    }

    if(keyPressed=='82'){
        console.log("r");
        new_image("roof.jpg");
    }

    if(keyPressed=='89'){
        console.log("y");
        new_image("yellow_wall.png");
    }

    if(keyPressed=='67'){
        console.log("c");
        new_image("cloud.jpg");
    }

    if(keyPressed=='85'){
        console.log("u");
        new_image("unique.png");
    }
}
function up()
{
    if(playerY>=0){
        playerY=playerY-block_height;
        console.log("block image height"+block_height);
        console.log("when up arrow key presssed X= " +playerX+" Y= "+playerY);
        canvas.remove(player_object);
        player_update();

    }
}

function down()
{
    if(playerY<=500){
        playerY=playerY+block_height;
        console.log("block image height"+block_height);
        console.log("when down arrow key presssed X= " +playerX+" Y= "+playerY);
        canvas.remove(player_object);
        player_update();

    }
}

function left()
{
    if(playerX>=0){
        playerX=playerX-block_width;
        console.log("block image width"+block_width);
        console.log("when LEFT arrow key presssed X= " +playerX+" Y= "+playerY);
        canvas.remove(player_object);
        player_update();

    }
}

function right()
{
    if(playerX<=850){
        playerX=playerX+block_width;
        console.log("block image width"+block_width);
        console.log("when RIGHT arrow key presssed X= " +playerX+" Y= "+playerY);
        canvas.remove(player_object);
        player_update();

    }
}