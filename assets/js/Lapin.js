class Rabbit {

    constructor(coords, dx, dy) {
        this.image = {
            src: document.getElementById("rabbit"),
            width: 50,
            height: 50,
        };
        
        this.x = coords.x;
        this.y = coords.y;
        this.xCenter = this.x + (this.image.width / 2);
        this.yCenter = this.y + (this.image.height / 2);
        this.dx = dx;
        this.dy = dy;
    }

    move() {
        c.drawImage(this.image.src, this.x, this.y, this.image.width, this.image.height);
    }

    update() {
        if (this.x + this.image.width > innerWidth || this.x  < 0) {
            this.dx = -this.dx;
        }
        if(this.y + 45 > innerHeight || this.y < 0)
        {
            this.dy = -this.dy; 
        }
        this.x += this.dx;
        this.y += this.dy;

        this.move();
    }

    seMultiplier(){

    }

    seDeplacer(){

    }

    meurt(){

    }
}