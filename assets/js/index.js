var canvas = document.querySelector('canvas#app');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Context
var c = canvas.getContext('2d');
var rayon = 30;

const UPDATABLE = {
    RABBIT_FREQUENCY: 1,
    RABBIT_DISTANCE_VISIBILITY: 2,
    RABBIT_INITIAL_NUMBER: 3,
    FOX_INITIAL_NUMBER: 5,
    FOX_TTL: 4
};

var app = {    
    ///////////////////////////////////  
    //  Paramètres de l'application  //
    ///////////////////////////////////
    rabbitFrequency: 1,         //  Fréquence d'apparition d'un lapin
    distanceVisibility: 100,     //  Distande de visibilité
    foxTTL: 10,                 //  Durrée de vie d'un renard en secondes
    initialRabbitNumber: 0,     //  Nombre de lapin initial
    initialFoxNumber: 0,        // Nombre de renard initial
    //////////////////////////////////////////
    //  Variables locales à l'application   //
    //////////////////////////////////////////
    alredyStarted: false,
    rabbitEatedNumber: 0,
    foxes: [],
    rabbits: [],
    stopRab: 0,
    stopFox: 0,
    start: () => {
        if (app.alredyStarted) app.reset();
        else app.alredyStarted = true;

        console.log('Application started !');
        app.initFox();
        app.initRabbit();
        app.show();
    },
    initFox: () => {
        var ifn = parseInt(document.getElementById('initialFoxNumber').value);
        app.initialFoxNumber = (ifn < 0 || isNaN(ifn)) ? 10 : ifn;

        //console.log(app.initialFoxNumber);

        for (var i = 1; i <= app.initialFoxNumber; i++) {
            //var rayon = 90;
            var x = Math.random() * (innerWidth - 30);
            var y = Math.random() * (innerHeight - 40);
            var dx = (Math.random() - 0.5) * 8;
            var dy = (Math.random() - 0.5) * 8;
            app.foxes.push(new Fox({x: x, y: y}, dx, dy));
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
            app.rabbits.push(new Rabbit({x: x, y: y}, dx, dy, rayon));
        }
    },
    update: (what) => {
        var value;

        switch (what) {
            case UPDATABLE.RABBIT_FREQUENCY:
                value = parseInt(document.getElementById('rabbitFrequency').value);
                var output = document.getElementById('rabbitFrequencyValue');
                var outputText = value + " par seconde";

                app.rabbitFrequency = value;
                output.textContent = outputText;
                break;
            case UPDATABLE.RABBIT_DISTANCE_VISIBILITY:
                value = parseInt(document.getElementById('distanceVisibility').value);
                app.distanceVisibility = (value < 20) ? 20 : value;
                break;
            case UPDATABLE.FOX_TTL:
                value = parseInt(document.getElementById('ttlFox').value);
                var output = document.getElementById('ttlFoxValue');
                var outputText;

                // Mise à jour de la variable de l'application
                app.foxTTL = value;
                if (app.foxTTL > 60) {
                    outputText = "1 minute " + (app.foxTTL - 60) + " seconde(s)";
                    
                } else {
                    outputText = app.foxTTL + " seconde(s)";
                }
                
                output.textContent = outputText;
                break;
            case UPDATABLE.RABBIT_INITIAL_NUMBER:
                alert('update RABBIT_INITIAL_NUMBER');
                break;
            case UPDATABLE.FOX_INITIAL_NUMBER:
                alert('update FOX_INITIAL_NUMBER');
                break;
            default:
                alert("Erreur de mise à jour : Code " + what + " inconnu");
        }
    },
    updateFoxNumnber: () => {
        app.reset('Fox');
        app.initFox();
    },
    show: () => {
        app.animate();
        app.generateRabbit();
        app.checkFoxTTL();
    },
    checkFoxTTL: () => {
        setInterval(() => {
            for (var f = 0; f < app.foxes.length; f++) {
                app.foxes[f].checkTTL(app.foxes, f, app.foxTTL);
            }
        }, 1000);
    },
    collision: () => {
        for (var f = 0; f < app.foxes.length; f++) {
            for (var r = 0; r < app.rabbits.length; r++) {
                if (app.getDistanceBetweenFoxAndRabbit(app.foxes[f], app.rabbits[r]) <= 30) {

                    app.foxes[f].eatRabbit(app.rabbits, r);                

                    //  Incrémentation du nombre de lapin mangé
                    app.rabbitEatedNumber++;
                    app.updateStatistics();
                }
            }
        }
    },
    updateStatistics: () => {
        document.getElementById('rabbitEatedNumber').textContent = app.rabbitEatedNumber;
    },
    animate: () => {
        // Permet d'éxécuter la fonction animate plusieurs fois
        requestAnimationFrame(app.animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        //console.log(app.distanceVisibility);
    
        for (var i = 0; i < app.foxes.length; i++) {
            app.foxes[i].update();
            //app.foxes[i].attack(app.rabbits, app.distanceVisibility);
        }

        for (var i = 0; i < app.rabbits.length; i++) {
            app.rabbits[i].update();
        }

        app.collision();
    },
    getDistanceBetweenFoxAndRabbit: (fox, rabbit) => {
        const xDistance = rabbit.x - fox.x;
        const yDistance = rabbit.y - fox.y;

        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    },
    generateRabbit: () => {
        var rf = parseInt(document.getElementById('rabbitFrequency').value);
        app.rabbitFrequency = (rf < 0 || isNaN(rf)) ? 1 : rf;
        
        app.stopRab = setInterval(() => {
            for (var i = 0; i < app.rabbitFrequency; i++) {
                var rayon = 30;
                var x = Math.random() * (innerWidth - rayon * 2) + rayon;
                var y = Math.random() * (innerHeight - rayon * 2) + rayon;
                var dx = (Math.random() - 0.5) * 8;
                var dy = (Math.random() - 0.5) * 8;
                app.rabbits.push(new Rabbit({x: x, y: y}, dx, dy, rayon));
            }
        }, 1000);

        app.stopFox = setInterval(() => {
            for (var i = 0; i < app.rabbitFrequency; i++) {
                var rayon = 30;
                var x = Math.random() * (innerWidth - rayon * 2) + rayon;
                var y = Math.random() * (innerHeight - rayon * 2) + rayon;
                var dx = (Math.random() - 0.5) * 8;
                var dy = (Math.random() - 0.5) * 8;
                app.foxes.push(new Fox({x: x, y: y}, dx, dy));
            }
        }, 10000);
    },
    reset: (what) => {
           
        var distVisibility = document.getElementById("distanceVisibility");
        var initRabbitNb = document.getElementById("initialRabbitNumber"); 
        var rabbitEatNb = document.getElementById("rabbitEatedNumber");
        var rabbitFreq = document.getElementById("rabbitFrequency");
        var ttlFox = document.getElementById("ttlFox");
        var initFoxNb = document.getElementById("initialFoxNumber");

        var initRabbitNbVal = document.getElementById("initialRabbitNumberValue");
        var ttlFoxVal = document.getElementById("ttlFoxValue");
        var initFoxNbVal = document.getElementById("initialFoxNumberValue");
        var rabbitFeqVal = document.getElementById("rabbitFrequencyValue");

        distVisibility.value = 20;
        ttlFoxVal.value = 0;
        initRabbitNb.value = 0;
        initFoxNbVal.value = 0;
        rabbitEatNb.textContent = 0;
        ttlFox.value = 0;
        rabbitFeqVal.value = 0;
        initRabbitNbVal.value = 0;
        rabbitFreq.value = 0;
        initFoxNb.value = 0;

        app.rabbits = [];
        app.foxes = [];

        clearInterval(app.stopRab);
        clearInterval(app.stopFox);

    }
}

