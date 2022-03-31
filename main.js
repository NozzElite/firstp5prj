function setup()
{
    canvas=createCanvas(380,280);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
}
function draw()
{
    image(video,0,0,380,280);
    tint(tint_colour);
}
function take_snapshot()
{
    save("Shorya.png");
}
function filter_tint()
{
    tint_colour=document.getElementById("color_name").value ;
}