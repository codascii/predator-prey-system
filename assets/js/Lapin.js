class Rabbit {

    constructor(coords, dx, dy, actif, multiplicite, vitesse, freqApparition, nbLapin, x,y, id) {
        this.x = coords.x
        this.y = coords.y
        this.dx = dx;
        this.dy = dy;
        this.rayon = rayon;
        this.image = document.getElementById("rabbit");
    }

    move() {
        c.drawImage(this.image, this.x, this.y, 50, 50);
    }

    update() {
        if (this.x + this.rayon > innerWidth || this.x - this.rayon < 0) {
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