let pikaSound;

function preload() {
  // Load the sound file
  soundFormats('mp3');
  pikaSound = loadSound('Pika.mp3');
}

function setup() {
  createCanvas(400, 400);
  noLoop(); // Only draw Pikachu once
  drawPikachu();
}

function drawPikachu() {
  background(255);

  // Body
  fill(255, 223, 0);
  ellipse(200, 200, 200, 200);

  // Ears
  fill(255, 223, 0);
  triangle(160, 80, 180, 40, 200, 80);
  triangle(240, 80, 220, 40, 200, 80);

  // Black tips on ears
  fill(0);
  triangle(160, 80, 170, 60, 180, 80);
  triangle(240, 80, 230, 60, 220, 80);

  // Eyes
  fill(0);
  ellipse(170, 180, 20, 30);
  ellipse(230, 180, 20, 30);

  // Cheeks
  fill(255, 0, 0);
  ellipse(150, 220, 30, 30);
  ellipse(250, 220, 30, 30);

  // Mouth
  fill(255, 0, 0);
  arc(200, 240, 40, 40, 0, PI);

  // Nose
  fill(0);
  ellipse(200, 210, 5, 5);
}

function mousePressed() {
  pikaSound.play();
}
