/**
 * Classe Fox
 */
class Fox {

    constructor(coords, dx, dy) {
        this.image = {
            src: document.getElementById("fox"),
            width: 50,
            height: 50,
        };

        this.x = coords.x;
        this.y = coords.y;
        this.xCenter = this.x + (this.image.width / 2);
        this.yCenter = this.y + (this.image.height / 2);
        this.dx = dx;
        this.dy = dy;
        
        this.lastLunch = new Date().getTime();
        this.lastLunchInit = new Date().getTime();
    }

    move() {
        c.drawImage(this.image.src, this.x, this.y, this.image.width, this.image.height);
    }

    update() {
        if (this.x + this.image.width > innerWidth || this.x < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.image.height > innerHeight || this.y < 0)
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

    eatRabbit(rabbitsTab, index) {
        // Enlève le lapin qui se trouve dans la case r du jeu
        // Il a été mangé par un renard
        rabbitsTab.splice(index, 1);

        this.lastLunch = new Date().getTime();
    }

    attack(rabbitsTab, distanceVisibility) {
        for (var i = 0; i < rabbitsTab.length; i++) {
            const xDistance = rabbitsTab[i].x - this.x;
            const yDistance = rabbitsTab[i].y - this.y;

            const distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

            if (distance < distanceVisibility) {
                //console.log('okokokoko');
                var vaAGauche = this.dx < 0;
                if (this.x < rabbitsTab[i].x && vaAGauche) {
                    this.dx = -this.dx;
                }

                const vaEnHaut = this.dy < 0;
                if (this.y < rabbitsTab[i].y && vaEnHaut) {
                    this.dy = -this.dy;
                }

                /*this.x += this.dx;
                this.y += this.dy;

                this.move();*/
            }
        }
    }

    die(foxesTab, index, rabbitTTL) {
        const now = new Date().getTime();
        if ((now - this.lastLunch) / 1000.0 > rabbitTTL) {
            foxesTab.splice(index, 1);
        }
    }
}
