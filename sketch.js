let cummings="All in green went my love riding on a great horse of gold into the silver dawn. four lean hounds crouched low and smiling the merry deer ran before. Fleeter be they than dappled dreams the swift sweet deer the red rare deer. Four red roebuck at a white water the cruel bugle sang before. Horn at hip went my love riding riding the echo down into the silver dawn. four lean hounds crouched low and smiling the level meadows ran before. Softer be they than slippered sleep the lean lithe deer the fleet flown deer. Four fleet does at a gold valley the famished arrow sang before. Bow at belt went my love riding riding the mountain down into the silver dawn. four lean hounds crouched low and smiling the sheer peaks ran before. Paler be they than daunting death the sleek slim deer the tall tense deer. Four tall stags at a green mountain the lucky hunter sang before. All in green went my love riding on a great horse of gold into the silver dawn. four lean hounds crouched low and smiling my heart fell dead before.";

let x = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
  
   cummingsArray= split(cummings, " ");
}

function draw() {
  
  for(let i=0; i<cummingsArray.length; i++){
    rotate(x);
    translate(width/2, height/2);
    rotate(x*-4);
    stroke(255, 255, 255, 10);
    line(0, 0, 100, 100);
   // translate(-100, -100);
    rotate(x*0.5)
  
    
    
    
  }
  
  x = x+0.0005;
  
}