var canvas;
var gameState=0;
var contestantCount,database,quiz,question,contestant;

function setup(){
  database=firebase.database();
  console.log(database);
  canvas = createCanvas(850,400);
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
