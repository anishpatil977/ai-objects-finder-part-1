Status="";
objects=[];

function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();

}

function start(){

objectDetector=ml5.objectDetector('cocossd' ,modelLoaded);
document.getElementById("Status").innerHTML="status:detectingobjects";


}

function modelLoaded(){

console.log("modelLoaded");
Status=true;
video.loop();
video.speed(1);
video.volume(0);

}
function gotResult(error,results){

if(error){

console.log(error);

}
console.log(results);

objects=results
}

function draw(){

image(video,0,0,480,380);
if(Status !=""){

objectDetector.detect(video,gotResult);
for(i=0; i<objects.length; i++){

document.getElementById("status").innerHTML="status:objectDetected";
document.getElementById("numberofobjects").innerHTML="Number of objects detected are:"+objects.length;

fill("#1c9432");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#1c9432");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}

}
