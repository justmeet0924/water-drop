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

	let color = "yellow";
    push();
    translate(mouseX, mouseY);
    waterdrop(color);
    pop();


}
