
class  Renard {

    constructor(vitesse, frequence_apparition, distance,dureeF, nbr_renard) {
        this.vitesse = vitesse;
        this.frequence_apparition = frequence_apparition;
        this.distance= distnace;
        this.dureeF = dureeF;
        this.nbr_renard = 10;
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

var x = 200;
var dx = 4;
var dy = 4;

var rayon = 30;
var y = 200;
function animate() {
    // Permet d'éxécuter la fonction animate plusieurs fois
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

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

