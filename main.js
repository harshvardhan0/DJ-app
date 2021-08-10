song = "";
scorerightwrist = 0;
scoreleftwrist = 0;
rightwristX = 0;
rightwristY = 0;
leftwristX = 0;
leftwristY = 0;
function preload(){
    song = loadSound("Astronaut-in-The-Ocean-song.mp3");
}
function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelLoded);
posenet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,500,500);
    fill("red");
    stroke("red");

    if(scorerightwrist > 0.2)
    {
        circle(rightwristX,rightwristY,20);
if(rightwristY > 0 && rightwristY <= 100){

    document.getElementById("sb").innerHTML = "speed = 0.5x";
    song.rate(0.5);
}
if(rightwristY > 100 && rightwristY <= 200){

    document.getElementById("sb").innerHTML = "speed = 1x";
    song.rate(1);
}
if(rightwristY > 200 && rightwristY <= 300){

    document.getElementById("sb").innerHTML = "speed = 1.5x";
    song.rate(1.5);
}
if(rightwristY > 300 && rightwristY <= 400){

    document.getElementById("sb").innerHTML = "speed = 2x";
    song.rate(2);
}
if(rightwristY > 400 ){

    document.getElementById("sb").innerHTML = "speed = 2.5x";
    song.rate(2.5);
    }
}
if(scoreleftwrist > 0.2) { 
    circle(leftwristX,leftwristY,20); 
    InNumberleftwristY = Number(leftwristY); 
    remove_decimals = floor(InNumberleftwristY); 
    volume = remove_decimals/500; 
    document.getElementById("vb").innerHTML = "Volume = " + volume; song.setVolume(volume); 

    }
}

function stop(){
    song.stop();
}
function modelLoded(){
    console.log("posenet is started");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        scorerightwrist = result[0].pose.keypoints[10].score;
        scoreleftwrist = result[0].pose.keypoints[9].score;
console.log("scorerightwrist = " + scorerightwrist + "scoreleftwrist = " + scoreleftwrist);


rightwristX = result[0].pose.rightWrist.x;
rightwristY = result[0].pose.rightWrist.y;
console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY);

leftwristX = result[0].pose.leftWrist.x;
leftwristY = result[0].pose.leftWrist.y;
console.log("leftwristX = " + leftwristX + "lefttwristY = " + leftwristY);
    }

}