var canvas, backgroundImage;
var database;
var playerCount;
var player;
var contestant, quiz, question;

function setup(){
  canvas = createCanvas(1200,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("purple");

}
