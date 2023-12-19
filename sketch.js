function setup() {
	createCanvas(800, 800);
	background(20);
	noLoop();
	blendMode(OVERLAY);
	//frameRate(10);
}

function draw() {


	let colo = color(250 * random([0, 1]), 250 * random([0, 1]), 0);
	waterdrop(width / 2, height / 2, 400, colo);

}



function mouseClicked() {

	let colo = color(250 * random([0, 1]), 250 * random([0, 1]), 200);
	waterdrop(mouseX, mouseY, 400, colo);

}
