class Renard {

    constructor(coords, dx, dy, rayon) {
        this.x = coords.x
        this.y = coords.y
        this.dx = dx;
        this.dy = dy;
        this.rayon = rayon;
    }

    creer() {
        const img = document.getElementById("fox");
        c.drawImage(img, this.x, this.y, 50, 50);
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

        this.creer();
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