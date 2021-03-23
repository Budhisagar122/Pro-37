var canvas;
var gameState=0;
var contestantCount,database,quiz,question,contestant,allContestants;

function setup(){
  database=firebase.database();
  console.log(database);
  canvas = createCanvas(850,400);
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if(contestantCount===2){
    quiz.update(1);
  }
  if(gameState===1){
    quiz.play();
  }
  
}
