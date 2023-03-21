video="";
status="";
objects=[];

function preload(){

video=createVideo("video.mp4");
video.hide();
} 



function setup(){

    canvas=createCanvas(480,380);
canvas.center();

}

function draw(){

image(video,0,0,480,380);
if(status!=""){
objectDetector.detect(video,gotResult);
for(i=0;i<object.length;i++);
document.getElementById("status").innerHTML="status=detecting objects";
document.getElementById("number_of_objects").innerHTML="number of objects are detected are"+object.length;

fill("red");
percent=floor(object[i].confidence*100);
text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke("blue");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
    

}

function start(){

objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="detecting object";

}

function modelLoaded(){

console.log("model loaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);

}

function gotResult(results,error){
if(error){
    console.error(error);
}

console.log(results);
objects=results;
}