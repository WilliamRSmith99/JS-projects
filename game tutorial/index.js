//Setup the game canvas | Width/Height = full screen size
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight


// establish a gravity modifier to fall rate
const gravity = .5;
//Setup player characteristics
class Player {
    constructor() {
        this.position = {
            x: 100,
            y:100
        }
        this.velocity = {
            x: 0,
            y:0
        }
        this.width = 30;
        this.height = 30;
    }

    // Draws the player as defined in the variables above
    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // updates the player position to account for change in position
    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (this.position.y + this.height + this.velocity.y <= canvas.height){
        this.velocity.y += gravity;

        } else{
            this.velocity.y = 0;
        }
    }
}

// Execute the above class to create the 'player'
const player = new Player();
player.update();

// animation loop continuously refreshes canvas to allow movement
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player.update();
}

animate();

// adds event listeners for keyboard input
addEventListener('keydown', ({keyCode}) => {
    switch (keyCode) {
        case 65 : 
        player.velocity.x = -5
        console.log('left');
        break;

        case 83 : 
        console.log('down');
        break;

        case 87 : 
        player.velocity.y -= 20
        console.log('Up');
        break;

        case 68: 
        player.velocity.x = 5
        console.log('right');
        break;

        case 32: 
        player.velocity.y -= 20
        console.log('space');
        break;

        case 37: 
        console.log('left');
        break;

        case 40: 
        console.log('down');
        break;

        case 38: 
        player.velocity.y -= 20
        console.log('Up');
        break;

        case 39: 
        console.log('right');
        break;
    }

    addEventListener('keyup', () => {
        player.velocity.x = 0
    })
})