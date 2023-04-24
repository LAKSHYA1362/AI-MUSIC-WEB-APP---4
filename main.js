
song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
status1 = "";
status2 = "";


function preload()
{
   song1 = loadSound("music.mp3");
   song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    status1 = song1.isPlaying();
    status2 = song2.isPlaying();
    fill('#FF0000');
    stroke("#FF0000");
    
    if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(status1 == false){
          document.getElementById("song1").innerHTML = "Song Name = " + Peter_pan;
          song1.play();
        }
    }
    song2.isPlaying()
    if(scoreRightWrist > 0.2){
        circle(RightWristX,RightWristY,20);
        song1.stop();
        if(status1 == false){
          document.getElementById("song2").innerHTML = "Song Name = " + Harry_poter;
          song2.play();
        }
    }
    

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist );
        
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY ="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY ="+ rightWristY);
    }
}



