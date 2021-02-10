var canvas;
var gameState = 0
var contestantCount; 
var database, myQuiz, question
var contestant
var allContestant



function setup(){


  canvas = createCanvas(850,400);
  database = firebase.database();

myQuiz = new Quiz();
myQuiz.getState()

myQuiz.start()




}


function draw(){
  background("pink");
 if(contestantCount===4){
        myQuiz.update(1)
    }

    if(gameState ===1){

      question.play();
    }
  
}
