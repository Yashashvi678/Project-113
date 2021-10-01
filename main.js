function preload(){
}

function setup() {
    canvas = createCanvas(610,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center;
}

function draw() {
    image(video,100,80,400,250);

    

    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(63, 27, 475, 25);
    rect(63, 347, 475, 25);
    rect(27, 63, 25, 275);
    rect(547, 63, 25, 275);


    stroke(168, 10, 10);
    fill(168, 10, 10);
    
    circle(40,40,50);
    circle(560,40,50);
    circle(40,360,50);
    circle(560,360,50);

}

function take_snapshot(){
    save("Myframe.png");
}