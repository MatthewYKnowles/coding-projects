<html>
<head>
  <title>HTML 5 Game in under 2 hours</title>
</head>
<body>
  <canvas id="canvas" width="768" height="512"></canvas>
</body>
</html>
---------------------------------------------------
//can't see the canvas

function startApp() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  context.fillStyle = "#000020";
  context.fillRect(0, 0, canvas.width, canvas.height);
}
---------------------------------------------------
//Why is it not showing up?
<body onload="startApp()">
  <canvas id="canvas" width="768" height="512"></canvas>
  <script type="text/javascript" src="game.js"></script>
</body>
-------------------------------------------------
//should see blue box
//next we need a hero
var hero = {
  position : {x:400, y:400},
  size : 60
};
context.fillStyle = "#FFFF00";
context.fillRect(hero.position.x, hero.position.y, hero.size, hero.size);
-------------------------------------------------
//should see a smaller yellow box
//Next add app object and create spawnHero funtion
var app = {};

function startApp() {
  app.canvas = document.getElementById('canvas');
  app.context = canvas.getContext('2d');

  app.context.fillStyle = "#000020";
  app.context.fillRect(0, 0, canvas.width, canvas.height);
  app.hero = {
    position : {x:400, y:400},
    size : 60
  };
  app.context.fillStyle = "#FFFF00";
  app.context.fillRect(app.hero.position.x, app.hero.position.y,
    app.hero.size, app.hero.size);
}
----------------------------------------------------------
//should factor out hero creation because we are going to use it multiple times
function spawnHero() {
  app.hero = {
    position : {x:400, y:400},
    size : 60
  };
  app.context.fillStyle = "#FFFF00";
  app.context.fillRect(app.hero.position.x, app.hero.position.y,
    app.hero.size, app.hero.size);

}
---------------------------------------------------------
//should still see a hero
//next going to redraw the scene quick enough to look like animation

function drawScene() {
//var canvas = app.canvas; I dont think this is necessary
var context = app.context;
context.fillStyle = "#000020";
context.fillRect(0, 0, canvas.width, canvas.height);
spawnHero();
}
------------------------------------------------------
//how often are we going to redraw the scene, enough to make it look like motion
spawnHero();
app.lastTime = window.performance.now();
window.requestAnimationFrame(frameUpdate);
}

function frameUpdate(timestamp) {
  window.requestAnimationFrame(frameUpdate);
  var dt = (timestamp - app.lastTime)/1000;
  app.lastTime = timestamp;
  drawScene();
}
//add console.log(1) to drawscene
-------------------------------------------------
//should see 1 logged very quickly
//we can now remove the fillRect and fillStyle from the original setup
//next get the hero to follow the mousemove
function myMouseMove(event) {
  app.hero.position.x = event.pageX;
  app.hero.position.y = event.pageY;
}
//put the following in startApp
app.canvas.addEventListener('mousemove', myMouseMove, false);
//move the following to drawscene to from spawnhero to redraw the heroes location
  context.fillStyle = "#FFFF00";
  context.fillRect(app.hero.position.x, app.hero.position.y,
    app.hero.size, app.hero.size);
--------------------------------------------------
//should be able to move around the hero
//next we are going to create a rock
function spawnRock() {
  app.rock = {
    position: {x:100, y:100},
    size: 120,
    speed: 150
  };
}
//spawn it in startApp
  spawnRock();
//draw it in the drawscene
app.context.fillStyle = "#FFFFFF";
app.context.fillRect(app.rock.position.x, app.rock.position.y,
  app.rock.size, app.rock.size);
---------------------------------------------------
//should have a rock on the screen
//lets make the rock fly, add the following to frameupdate
var rock = app.rock;
rock.position.y += rock.speed * dt;
console.log(rock.position.y);
//you can see that it goes on forever
//lets make it come back after it leaves the screen
if (rock.position.y - rock.size > app.canvas.height){
  spawnRock();
}
//it always starts off at the same point, boring
//make the position start off screen
position : {
  x:Math.random() * app.canvas.width,
  y:Math.random() * -app.canvas.height},
  //remove console log of rock position
-----------------------------------------------------
//should have a rock falling from the sky
//in programming we want to make similar things Identical so we can factor them out
//so we are going to add color properties to our rock and hero
    color: "#FFFF00" //add to hero
    color: "#FFFFFF" //add to rock
//update colors in drawScene
    app.context.fillStyle = app.hero.color;
    app.context.fillRect(app.hero.position.x, app.hero.position.y,
      app.hero.size, app.hero.size);

    app.context.fillStyle = app.rock.color;
    app.context.fillRect(app.rock.position.x, app.rock.position.y,
      app.rock.size, app.rock.size);
//refresh and we should see no change
//now we want to create one drawObject function
function drawObject(object) {
  var context = app.context;
  context.save();
  context.fillStyle = object.color;
  context.fillRect(object.position.x, object.position.y,
    object.size, object.size);
}
//add these to draw scene and remove fillstyle and fillrect
------------------------------------------------------
//refresh and we should see no change
//now we are going to add some images
//add to startApp
app.shipImage = new Image();
app.shipImage.src = "images/ship.png";

app.rockImage = new Image();
app.rockImage.src = "images/rock.png";
//add the following to spawnhero
    image : app.shipImage
//add the follwoing to spawnrock
    image: app.rockImage
//change the drawObject funtion to
function drawObject(object) {
  var context = app.context;
  context.save();
  context.translate(object.position.x, object.position.y);
  context.drawImage(object.image, -object.size/2, -object.size/2, object.size, object.size);
  context.restore();
}
//we can now remove colors from our objects
-----------------------------------------------------------
//should now have a ship and a rock
//we want to make something happen if the ship gets hit
//first need to a fucntion to measure the distance between two objects
function getDistance(object1, object2) {
  var dx = object1.position.x - object2.position.x;
  var dy = object1.position.y - object2.position.y;
  return Math.sqrt(dx*dx + dy*dy);
}
//we are going to create a rock function to see if it hits the hero
function spawnRock() {
  app.rock = {
    position : {
      x:Math.random() * app.canvas.width,
      y:Math.random() * -app.canvas.height},
    size: 120,
    speed: 150,
    image: app.rockImage,
    checkHitHero : function(hero) {
      var distance = getDistance(hero, this);
      if (distance < 50) {
        hero.state = 'exploded';
        console.log("exploded");
      }
    }
  };
}
//we can see that the hero is getting exploded in the console
//now we want to see it in the game
//import exploded image, add below to startApp
app.explosionImage = new Image();
app.explosionImage.src = "images/explosion.png";
//we are now going to create a draw me function in hero that
      //will know if we should draw explosion or ship
function spawnHero() {
  app.hero = {
    position : {x:400, y:400},
    size : 60,
    image : app.shipImage,
    drawMe : function() {
      if (this.state === "exploded") {
        this.image = app.explosionImage;
      }
      drawObject(this);
    }
  };
}
// replace drawObject in drawScene with app.hero.drawMe();
app.hero.drawMe();
//remove consolelog
//change mymousemove so that explosion stays put
function myMouseMove(event) {
  if (app.hero.state != "exploded"){
    app.hero.position.x = event.pageX;
    app.hero.position.y = event.pageY;
  }
}
---------------------------------------------------------
//adding more rocks
//add move and past bottom function to rock object
function spawnRock() {
  app.rock = {
    position : {
      x:Math.random() * app.canvas.width,
      y:Math.random() * -app.canvas.height},
    size: 120,
    speed: 150,
    image: app.rockImage,
    move : function(dt) {
      this.position.y += this.speed * dt;
    },
    atBottom : function(bottom) {
      return this.position.y - this.size > bottom;
    },
    checkHitHero : function(hero) {
      var distance = getDistance(hero, this);
      if (distance < 50) {
        hero.state = 'exploded';
      }
    }
  };
}
//update frameUpdate method to call those functions

var rock = app.rock;
rock.move(dt);

rock.checkHitHero(app.hero);

if (rock.atBottom(canvas.height)){
  spawnRock();
}
//should work as before

---------------------------------------------------------
//add a difficulty factor to the start app function to increase speed
  app.difficulty = .1;
//accelerate rock speed by adding difficulty increase in frameUpdate

if (app.state === 'play') {
  app.difficulty += dt;
  app.score = Math.floor(app.difficulty * 10);
}
//change the rock's speed
speed : 150 + 25 * app.difficulty
//add score tracker
function drawScore(context) {
    context.font = "italic 30px Calibri";
    context.textAlign = "center";
    context.fillStyle = "#FFFF00";
    context.fillText("Score " + app.score, canvas.width/2, 40);
  }
//call it at the end of draw scene
  app.hero.drawMe(context);
  for (var i = 0; i < app.rocks.length; i++) {
    var object = app.rocks[i];
    object.drawMe(context);
  }
  context.restore();
  drawScore(context);//<--------------------
}
//change check hit hero to change app.state to done
checkHitHero : function(hero) {
  var distance = getDistance(hero, this);
  if (distance < 50) {
    hero.state = 'exploded';
    app.state = 'done';
  }
-------------------------------------------------
//create spawnRocks function
function spawnRocks() {
  for (var i = 0; i < 10; i ++) {
    spawnRock();
  }
}
//call spawnrocks and create rock array in startApp
app.rocks = [];

spawnHero();
spawnRocks();

//change spawnrock to create a rock variable and push it to the rock array
function spawnRock() {
  var rock = {
    position : {
///////////////////////////////////////////////
        hero.state = 'exploded';
      }
    }
  };
  app.rocks.push(rock);
}
//we are no longer going to be able to
  //use the one app.context we need to make it a parameter
  function drawObject(context, object) {
    context.save();
    context.translate(object.position.x, object.position.y);
    context.drawImage(object.image, -object.size/2, -object.size/2, object.size, object.size);
    context.restore();
  }
  //this means we have to change where drawObject in ship
  function spawnHero() {
    app.hero = {
      drawMe : function(context) {
        if (this.state === "exploded") {
          this.image = app.explosionImage;
        }
        drawObject(context, this);
      }
//add drawme to rock
  function spawnRock() {
    var rock = {
      drawMe : function(context) {
        drawObject(context, this);
      },
//update drawscene to include drawing each rock

function drawScene() {
  var context = app.context;
  context.fillStyle = "#000020";
  context.fillRect(0, 0, canvas.width, canvas.height);
  app.hero.drawMe(context);
  for (var i = 0; i < app.rocks.length; i++) {
    var object = app.rocks[i];
    object.drawMe(context);
  }
  context.restore();
}
//update frameupdate to track the rocks movement

function frameUpdate(timestamp) {
  window.requestAnimationFrame(frameUpdate);

  var dt = (timestamp - app.lastTime)/1000;
  app.lastTime = timestamp;

  for (var i = 0; i < app.rocks.length; i++){
    var rock = app.rocks[i];
    rock.move(dt);

    if (rock.atBottom(canvas.height)){
      app.rocks.splice(i, 1);
      spawnRock();
    }
    rock.checkHitHero(app.hero);
  }
  drawScene();
}
--------------------------------------
//add rotation to the rocks
//add angle roll and rotate to spawnRock
angle : Math.random() * Math.PI,
roll : Math.random() * 2 * Math.PI - Math.PI,
image: app.rockImage,
move : function(dt) {
  this.position.y += this.speed * dt;
},
rotate : function(dt) {
  this.angle += this.roll * dt;
},
//add context.rotate to drawObject
  context.rotate(object.angle);
// add rock.rotate(dt) to frameUpdate
for (var i = 0; i < app.rocks.length; i++){
  var rock = app.rocks[i];
  rock.move(dt);
  rock.rotate(dt);///<---------------------

  if (rock.atBottom(canvas.height)){
    app.rocks.splice(i, 1);
---------------------------------------------
//display the final score by updating drawScore
function drawScore(context) {
  if (app.state === 'play'){
    context.font = "italic 30px Calibri";
    context.textAlign = "center";
    context.fillStyle = "#FFFF00";
    context.fillText("Score " + app.score, canvas.width/2, 40);
  }
  else {
    context.font = "italic 130px Calibri";
    context.textAlign = "center";
    context.fillStyle = "#FFFF00";
    context.fillText("Final Score " + app.score, canvas.width/2, canvas.height/2);
  }
}

















-------------
