const canvas = document.querySelector("canvas");

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;



c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.7;

//Create Player and Enemy


class Sprite{
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastKey = null;
    }

    draw() {
        c.fillStyle = 'purple';
        c.fillRect(this.position.x, this.position.y, 50, this.height);
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0;
        }else{
            this.velocity.y += gravity;
        }
    }
}


const player = new Sprite({

    position: {
        x: 0,
        y: 0
    },

    velocity: {
        x: 0,
        y: 0
    }
});

player.draw()

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
});

enemy.draw()

console.log(player)

const keys = {
    d: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
  
    ArrowRight: {
      pressed: false,
    },

    ArrowLeft: {
      pressed: false,
    },
}



window.addEventListener("keydown", function(event) {
    console.log(event.key);
    switch(event.key) {
      case 'd':
        keys.d.pressed = true;
        player.lastKey = 'd';
        break;
  
      case 'a':
        keys.a.pressed = true;
        player.lastKey = 'a';
        break;
      case "w":
        player.velocity.y = -20;
        break;
  
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        enemy.lastKey = 'ArrowRight';
  
        break;
  
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = 'ArrowLeft';
        break;
  
      case "ArrowUp":
        enemy.velocity.y = -20;
        break;
    }
  
    console.log(event.key);
  });

  window.addEventListener("keyup", function(event) {
    // Player keys.
    switch (event.key) {
      case "d":
        keys.d.pressed = false;
  
        break;
  
      case "a":
        keys.a.pressed = false;
        break;
    }
  
    // Enemy keys.
    switch (event.key) {
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
  
        break;
  
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
    }
  
    console.log(event.key);
  });


function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

// Player movement

player.velocity.x = 0; // velocity default player.

if (keys.a.pressed && player.lastKey === "a") {
  player.velocity.x -= 5;
} else if (keys.d.pressed && player.lastKey === "d") {
 player.velocity.x += 5;
}

enemy.velocity.x = 0; // velocity default of enemy.


// Enemy movement
if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
  enemy.velocity.x -= 5;
} else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
  enemy.velocity.x += 5;
}
}

animate()
