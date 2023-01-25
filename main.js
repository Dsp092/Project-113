function draw()
{
image(video,100,90,300,245);
fill(180,20,20);
stroke(180,20,20);

circle(40,40,50);
circle(460,40,50);
circle(40,360,50);
circle(460,360,50);

fill(60,180,80);
stroke(60,180,80);

rect(65,30,380,30);
rect(60,350,380,30);
rect(30,60,30,280);
rect(450,60,30,280);

}

function start()
{

}

function preload()
{

}
function setup()
{
    canvas=createCanvas(550,400);
    canvas.position(70,200);
    
    video=createCapture(VIDEO);
    video.hide();
}

function take_snapshot()
{
    save("frame.png");
}