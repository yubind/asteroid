var ship;
var asteroids = [];
var lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for(var i = 0; i < 5; i++) {
        asteroids.push(new Asteroid());
    }
}

function draw() {
    background(0);
    
    for(var i = 0; i < lasers.length; i++) {
        lasers[i].render();
        lasers[i].update();
        for(var j = 0; j < asteroids.length; j++) {
            if(lasers[i].hits(asteroids[j])) {
                var newAsteroids = asteroids[j].breakup();
                asteroids.push(newAsteroids);
                asteroids.splice(j, 1);
            }
        }
    }
    
    for(var i = 0; i < asteroids.length; i++) {
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }
    
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();
}

function keyReleased() {
    ship.setRotation(0);
    ship.isBoosting = false;
}

function keyPressed() {
    if(key == ' ') {
        lasers.push(new Laser(ship.pos, ship.heading));
    } else if(keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if(keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    } else if(keyCode == UP_ARROW) {
        ship.isBoosting = true;
    } 
}

