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
        this.lastLunch = new Date().getTime();
        this.lastLunchInit = new Date().getTime();
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
    }

    checkTTL(foxesTab, index, rabbitTTL) {
        this.die(foxesTab, index, rabbitTTL);
    }

   SeDeplacent(){
        return ;
    }


    eatRabbit(rabbitsTab, index) {
        // Enlève le lapin qui se trouve dans la case r du jeu
        // Il a été mangé par un renard
        rabbitsTab.splice(index, 1);

        this.lastLunch = new Date().getTime();
    }

    die(foxesTab, index, rabbitTTL) {
        const now = new Date().getTime();
        if ((now - this.lastLunch) / 1000.0 > rabbitTTL * 60) {
            foxesTab.splice(index, 1);
        }
    }
}