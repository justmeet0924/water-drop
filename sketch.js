function setup() {
    createCanvas(400, 400);

    noLoop();
    blendMode(OVERLAY)
}

function draw() {
    background(20);


    let color = "yellow";
    push();
    translate(width / 2, height / 2);
    waterdrop(color);
    pop();




}



function mouseClicked() {

    push();
    let color = color(250 * random(), 250, 0);
    console.log(color)
    translate(mouseX, mouseY);
    waterdrop(color);
    pop();


}
