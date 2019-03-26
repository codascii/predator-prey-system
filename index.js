// Les renards sont les cercles
class  Renard {

    constructor(coords, dx, dy, rayon, vitesse, frequence_apparition, distance,dureeF, nbr_renard) {
        this.x = coords.x
        this.y = coords.y
        this.dx = dx;
        this.dy = dy;
        this.rayon = rayon;
        /*this.vitesse = vitesse;
        this.frequence_apparition = frequence_apparition;
        this.distance= distnace;
        this.dureeF = dureeF;
        this.nbr_renard = 10;*/
    }

    creer() {
        c.beginPath();
        c.arc(this.x, this.y, this.rayon, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
    }

    update() {
        if (this.x + this.rayon > innerWidth || this.x - this.rayon < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.rayon > innerHeight || this.y - this.rayon < 0)
        {
            this.dy = -this.dy; 
        }
        this.x += this.dx;
        this.y += this.dy;

        this.creer();
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

class Lapin {
    constructor(actif, multiplicite, vitesse, freqApparition, nbLapin, x,y, id) {
        this.actif = actif;
        this.multiplicite = multiplicite;
        this.vitesse = vitesse;
        this.freqApparition = freqApparition;
        this.nbLapin = nbLapin;
        this.multiplicite = multiplicite
        this.x = x;
        this.y = y;
        this.id = id;
    }

    seMultiplier(){

    }

    seDeplacer(){

    }

    meurt(){

    }
}


var canvas = document.querySelector('canvas#app');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Context
var c = canvas.getContext('2d');
/*c.fillRect(100, 100, 100, 100);
c.fillRect(200, 100, 100, 100);
c.fillRect(300, 100, 100, 100);*/


// Arc / Cercle
/*var x, y;
for (var i = 1; i < 100; i++) {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
}*/

var renards = [];
for (var i = 1; i <= 100; i++) {
    var rayon = 30;
    var x = Math.random() * (innerWidth - rayon * 2) + rayon;
    var y = Math.random() * (innerHeight - rayon * 2) + rayon;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;

    renards.push(new Renard({x: x, y: y}, dx, dy, rayon));
}

console.log(renards);


var rayon = 30;
var y = 200;
function animate() {
    // Permet d'éxécuter la fonction animate plusieurs fois
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    //renard.creer();

    for (var i = 0; i < renards.length; i++) {
        renards[i].update();
    }

    c.beginPath();
    c.arc(x,y, rayon, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if (x + rayon > innerWidth || x - rayon < 0) {
        dx = -dx;
    }
    if(y + rayon > innerHeight || y - rayon < 0)
    {
        dy = -dy; 
    }
    x += dx;
    y += dy;
}

animate();

