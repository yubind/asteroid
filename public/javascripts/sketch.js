var ship;
var asteroids = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    asteroids.push(new Asteroid());
}

function draw() {
    background(0);
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();
    
    asteroids.forEach(function(asteroid) {
        asteroid.render();
    });
}

function keyReleased() {
    ship.setRotation(0);
    ship.isBoosting = false;
}

function keyPressed() {
    if(keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if(keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    } else if(keyCode == UP_ARROW) {
        ship.isBoosting = true;
    } 
}

