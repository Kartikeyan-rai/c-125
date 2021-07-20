function preload(){

}
function setup(){
   video=createCapture(VIDEO);
   video.size(600,550);
   video.position(50,70)
   canvas=createCanvas(600,500);
   canvas.position(740,100);
   poseNet=ml5.poseNet(video,modelLoded);
   poseNet.on('pose',gotposes);
}
function modelLoded(){
    console.log("poseNet is initialized")
}
function draw(){
    background('blue');
    text("hello world!", noseX,noseY);
    textSize(difference)
 }
 var noseX=0;
 var noseY=0;
 var LeftWristX=0;
 var RightWristX=0;
 var difference=0;
 function gotposes(result){
     if(result.length > 0){
         console.log(result)
         noseX=floor(result[0].pose.nose.x);
         noseY=floor(result[0].pose.nose.y);
         console.log(noseX,noseY);
 
         LeftWristX=floor(result[0].pose.leftWrist.x);
         RightWristX=floor(result[0].pose.rightWrist.x);
         console.log(LeftWristX,RightWristX);
         difference=LeftWristX-RightWristX;
         document.getElementById("size").innerHTML="The width and the height of the Text will be "+difference+"px";
     }
 }