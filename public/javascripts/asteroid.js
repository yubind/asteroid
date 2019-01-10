function Asteroid() {
    this.pos = createVector(random(width), random(height));
    this.r = random(15, 52);
    this.vel = p5.Vector.random2D();
    this.total = floor(random(5, 15));
    this.offset = [];
    for(var i = 0; i < this.total; i++) {
        this.offset[i] = random(-10, 10);
    }
    
    this.edges = function() {
        //when x hits right side of screen make it go to left side
        if(this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        //when x hits left side make it go to right side
        } else if(this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        
        if(this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if(this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }
    
    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        push();
        noFill();
        stroke(255);
        translate(this.pos.x, this.pos.y);
        beginShape();
        for (var i = 0; i < this.total; i++) {
            var angle = map(i, 0, this.total, 0, TWO_PI);
            var r = this.r + this.offset[i];
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
    }
}