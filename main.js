noseX = 0;
noseY = 0;
rightwrist = 0;
leftwrist = 0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 200);
    Canvas.position(520, 200);
    posenet = ml5.posenet(video, modelLoaded);
    posenet.on('pose, gotposes');

}


function modelLoaded() {

    console.log('posenet is inisalise')
}

function gotposes(results) {

    if(results.length > 0){
        console.log(results);
    }
}