const TYPE_ANIMAL = {
    FOX: 1,
    RABBIT: 2,
};

class Fox {

    constructor(coords, dx, dy, rayon) {
        this.x = coords.x
        this.y = coords.y
        this.dx = dx;
        this.dy = dy;
        this.rayon = rayon;
        this.image = document.getElementById("fox");
    }

    move() {
        c.drawImage(this.image, this.x, this.y, 50, 50);
    }

    update() {
        if (this.x + this.rayon > innerWidth || this.x - this.rayon < 0) {
            this.dx = -this.dx;
        }
        if(this.y + 40 > innerHeight || this.y < 0)
        {
            this.dy = -this.dy; 
        }
        this.x += this.dx;
        this.y += this.dy;

        this.move();
        this.checkTTL();
    }

    checkTTL() {

    }

   SeDeplacent(){
        return ;
    }


    MangeLapin(){

        return;
    }

    Meurt(){
         
        return;
    }
}