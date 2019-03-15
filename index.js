
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
c.fillRect(300, 100, 100, 100);
console.log(canvas);*/
