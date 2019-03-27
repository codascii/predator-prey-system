var canvas = document.querySelector('canvas#app');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Context
var c = canvas.getContext('2d');
var rayon = 30;
/*var y = 200;*/



var app = {
    alredyStarted: false,
    // Nombre initiale de renard
    initialFoxNumber: 0,
    initialRabbitNumber: 0,
    rabbitFrequency: 1,
    rabbitEatedNumber: 0,
    foxes: [],
    rabbits: [],
    start: () => {
        if (app.alredyStarted) app.reset();
        else app.alredyStarted = true;

        console.log('Application started !');
        app.initFox();
        app.initRabbit();
        app.show();
        /*console.log(app.foxes);*/

        

    },
    initFox: () => {
        var ifn = parseInt(document.getElementById('initialFoxNumber').value);
        app.initialFoxNumber = (ifn < 0 || isNaN(ifn)) ? 10 : ifn;

        for (var i = 1; i <= app.initialFoxNumber; i++) {
            var rayon = 30;
            var x = Math.random() * (innerWidth - rayon * 2);
            var y = Math.random() * (innerHeight - rayon * 2);
            var dx = (Math.random() - 0.5) * 8;
            var dy = (Math.random() - 0.5) * 8;
            app.foxes.push(new Fox({x: x, y: y}, dx, dy, rayon));
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
    updateFoxNumnber: () => {
        app.reset('Fox');
        app.initFox();
    },
    show: () => {
        app.animate();
        //app.generateRabbit();
    },
    collision: () => {
        for (var f = 0; f < app.foxes.length; f++) {
            for (var r = 0; r < app.rabbits.length; r++) {
                if (20 >= app.getDistanceBetweenFoxAndRabbit(app.foxes[f], app.rabbits[r])) {
                    // Enlève le lapin qui se trouve dans la case r du jeu
                    // Il a été mangé par un renard
                    app.rabbits.splice(r, 1);

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
    
        //renard.creer();
    
        for (var i = 0; i < app.foxes.length; i++) {
            app.foxes[i].update();
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
        
        setInterval(() => {
            var rayon = 30;
            var x = Math.random() * (innerWidth - rayon * 2) + rayon;
            var y = Math.random() * (innerHeight - rayon * 2) + rayon;
            var dx = (Math.random() - 0.5) * 8;
            var dy = (Math.random() - 0.5) * 8;
            app.rabbits.push(new Rabbit({x: x, y: y}, dx, dy, rayon));
        }, app.rabbitFrequency * 1000);

        setInterval(() => {
            var rayon = 30;
            var x = Math.random() * (innerWidth - rayon * 2) + rayon;
            var y = Math.random() * (innerHeight - rayon * 2) + rayon;
            var dx = (Math.random() - 0.5) * 8;
            var dy = (Math.random() - 0.5) * 8;
            app.foxes.push(new Fox({x: x, y: y}, dx, dy, rayon));
        }, app.rabbitFrequency * 10000);
    },
    reset: (what) => {
        console.log("reset");
        if (what === "Fox") app.foxes = [];        
    }
}


/*var rab = new Rabbit({x: 380, y: 120}, 0, 0, 0);
        var fox = new Fox({x: 500, y: 200}, 0, 0, 0);

        rab.update();
        fox.update();

        console.log(app.getDistanceBetweenFoxAndRabbit(fox, rabbit));*/
