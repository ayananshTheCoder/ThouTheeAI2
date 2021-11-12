video = "";
status = "";
objects = [];

function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas = createCanvas(240, 190);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statusLabel").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Mödel Löded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw()
{
    image(video, 0, 0, 240, 190);
    fill('#000000');
    text('Your Video', 50, 50);
    noFill();
}