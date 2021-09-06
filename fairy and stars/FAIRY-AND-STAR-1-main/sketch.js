var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg  =  loadAnimation("fairyImage1.png","fairyImage2.png");
	
}

function setup() {
	createCanvas(500, 500);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
    fairy = createSprite(100,350,20,20);
	fairy.addAnimation("flyingfairy",fairyImg);
	fairy.scale  = 0.2;

	//create fairy sprite to scale the fairy
	

	star = createSprite(350,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(350 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
 if(star.y>290 && starBody.position.y>290)
 {
	Matter.Body.setStatic(starBody,true);  
 }
  //write ode to stop star in the hand of fairy

  drawSprites();

}

function keyPressed (){
	if (keyCode === LEFT_ARROW)
    { fairy.x-=4}

if (keyCode === RIGHT_ARROW)
    { fairy.x+=4}
	if (keyCode === DOWN_ARROW)
    { Matter.Body.setStatic(starBody,false)}
}
