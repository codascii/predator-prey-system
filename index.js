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
        const img = document.getElementById("fox");
        c.drawImage(img, this.x, this.y, 50, 50);
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

class Lapin {

    constructor(coords, dx, dy, actif, multiplicite, vitesse, freqApparition, nbLapin, x,y, id) {
        this.x = coords.x
        this.y = coords.y
        this.dx = dx;
        this.dy = dy;
        this.rayon = rayon;
    }

    creer() {
        const img = document.getElementById("rabbit");
        c.drawImage(img, this.x, this.y, 50, 50);
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
var rayon = 30;
var y = 200;


var app = {
    alredyStarted: false,
    // Nombre initiale de renard
    initialFoxNumber: 0,
    initialRabbitNumber: 0,
    renards: [],
    rabbits: [],
    start: () => {
        if (app.alredyStarted) app.reset();
        else app.alredyStarted = true;

        console.log('Application started !');
        app.initFox();
        app.initRabbit();
        app.show();
        console.log(app.renards);

    },
    initFox: () => {
        var ifn = parseInt(document.getElementById('initialFoxNumber').value);
        app.initialFoxNumber = (ifn < 0 || isNaN(ifn)) ? 10 : ifn;

        for (var i = 1; i <= app.initialFoxNumber; i++) {
            var rayon = 30;
            var x = Math.random() * (innerWidth - rayon * 2) + rayon;
            var y = Math.random() * (innerHeight - rayon * 2) + rayon;
            var dx = (Math.random() - 0.5) * 8;
            var dy = (Math.random() - 0.5) * 8;
            app.renards.push(new Renard({x: x, y: y}, dx, dy, rayon));
        }
    },
    initRabbit: () => {
        var irn = parseInt(document.getElementById('initialRabbitNumber').value);
        app.initialRabbitNumber = (irn < 0 || isNaN(irn)) ? 10 : irn;

        for (var i = 1; i <= app.initialRabbitNumber; i++) {
            var rayon = 30;
            var x = Math.random() * (innerWidth - rayon * 2) + rayon;
            var y = Math.random() * (innerHeight - rayon * 2) + rayon;
            var dx = (Math.random() - 0.5) * 8;
            var dy = (Math.random() - 0.5) * 8;
            app.rabbits.push(new Lapin({x: x, y: y}, dx, dy, rayon));
        }
    },
    updateFoxNumnber: () => {
        app.reset('Fox');
        app.initFox();
    },
    show: () => {
        app.animate();
    },
    animate: () => {
        // Permet d'éxécuter la fonction animate plusieurs fois
        requestAnimationFrame(app.animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
    
        //renard.creer();
    
        for (var i = 0; i < app.renards.length; i++) {
            app.renards[i].update();
        }

        for (var i = 0; i < app.rabbits.length; i++) {
            app.rabbits[i].update();
        }
    },
    reset: (what) => {
        console.log("reset");
        if (what === "Fox") app.renards = [];        
    }
}

