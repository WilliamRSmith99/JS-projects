
class World{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init(){
        const image = new Image();

        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        }
        image.src = '/tutorial/maps/DemoLower.png'


        const x = 128
        const y = 128

        const shadow = new Image ();
        shadow.onload = () => {
            this.ctx.drawImage(shadow, 0, 0, 32, 32, x *16 -8, y *16 -18, 32, 32);
        }
        shadow.src = '/tutorial/characters/shadow.png'


        const plane = new Image();
        plane.onload = () => {
            this.ctx.drawImage(plane,
                0, //left cut
                0, // top cut
                32, // width cut
                32, // height cut
                x, // x-cord on a 16x16 grid
                y,
                32,32) // size of char
        }
        plane.src = "/tutorial/characters/people/hero.png"

        plane.speedx = 0;
        plane.speedy = 0;



    }
}