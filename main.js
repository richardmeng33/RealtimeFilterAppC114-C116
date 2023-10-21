 
 noseX = 0
 noseY = 0

function preload()
 {
   clownimage = loadImage("https://i.postimg.cc/XJVLQKBY/clown.png")
 }

 function setup()
 {
    picture = createCanvas(500,400)
    picture.position(500, 200)
    video = createCapture(VIDEO)
    video.hide()
    posnet = ml5.poseNet(video, modelloaded)
    posnet.on("pose", gotresults)
 }

function gotresults(result)
{
   if(result.length>0)
   {
      console.log(result)
      noseX = result[0].pose.nose.x
      noseY = result[0].pose.nose.y

   }
}

function modelloaded()
{
   console.log("model has loaded")
}

 function draw()
 {
   image(video, 0, 0, 500, 400)
   image(clownimage, noseX-75, noseY-60, 50, 50)
   //fill("red")
   //circle( noseX-55, noseY-45, 50)
 }

 function snap()
 {
   save("ThePic.png")
 }