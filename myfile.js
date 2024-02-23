// Move Characters with event-listener 20:00

// Change the gravity property variable = 0.7. 
const gravity = 0.7;

// Variable key.
const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  w: {
    pressed: false,
  },

  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};
// Independent Variable to record the last key pressed for player. DEPRECCATED.
// let lastKey;

window.addEventListener("keydown", () => {
  console.log(event.key);
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      player.lastKey = "d";
      break;

    case "a":
      keys.a.pressed = true;
      player.lastKey = "a";
      break;
    case "w":
      player.velocity.y = -20;
      break;

    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      enemy.lastKey = "ArrowRight";

      break;

    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      enemy.lastKey = "ArrowLeft";
      break;

    case "ArrowUp":
      enemy.velocity.y = -20;
      break;
  }

  console.log(event.key);
});

// A conditioning once the keys are raised up. If it's "d", then reverse its key datatype to false, else if it's "a" then reverse its key datatype to false.
window.addEventListener("keyup", () => {
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

// This function belongs to animate()

// A conditioning of the current pressed key. If the key 'd' is pressed, then the player velocity incremented += 5 according to its truthy state, else if it's "a" then decrementing -= 5 of its player velocity based on its truthy state. We'll also check if the corresponding constructor key is either 'a' or 'd'.

// Player movement
player.velocity.x = 0; // Velocity default player.
enemy.velocity.x = 0; // Velocity default enemy.
if (keys.a.pressed && player.lastKey === "a") {
  player.velocity.x = 5;
} else if (keys.d.pressed && player.lastKey === "d") {
  player.velocity.x = -5;
}

// Enemy movement
if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
  enemy.velocity.x = 5;
} else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
  enemy.velocity.x = -5;
}

// class Sprite property
// this.lastKey
