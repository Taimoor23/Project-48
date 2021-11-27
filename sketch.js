var bullet1, bullet2;

var gameState="start";

var score1=0,score2=0;
function preload(){
  BTank1IMG=loadImage("images/BTank1.png");
  BTank2IMG=loadImage("images/BTank2.png");
  BTank3IMG=loadImage("images/BTank3.png");
  BTank4IMG=loadImage("images/BTank4.png");
  RTank1IMG=loadImage("images/RTank1.png");
  RTank2IMG=loadImage("images/RTank2.png");
  RTank3IMG=loadImage("images/RTank3.png");
  RTank4IMG=loadImage("images/RTank4.png");

  BG1IMG=loadImage("images/Hit-the-Beach.jpg");

  SB1IMG=loadImage("images/StartButton.jpg");

  smokeIMG=loadImage("images/smoke.png");
  RankUpMagic1=loadImage("images/7thOne.jpg");
  RankUpMagic2=loadImage("images/HF.jpg");
  RankUpMagic3=loadImage("images/Rank Up.jpg");
}
function setup() {
  createCanvas(700,600);
  edges=createEdgeSprites();
  
  RUM1=createSprite(240,290,50,50);
  RUM1.addImage(RankUpMagic1);
  RUM1.scale=0.4;
  RUM2=createSprite(180,400,20,20);
  RUM2.addImage(RankUpMagic2);
  RUM2.scale=0.4;
  

  bullet2Group=new Group();
  bullet1Group=new Group();
  wallGroup=new Group();

  Btank=createSprite(60,60,20,20);
  Btank.addImage(BTank1IMG);
  Btank.scale=0.2;
  Rtank=createSprite(650,40,20,20);
  Rtank.addImage(RTank1IMG);
  Rtank.scale=0.2;

  wall1=createSprite(130, 50,20, 120);
  wall1.shapeColor="darkgreen";
  //wallGroup.add(wall1);
  wall2=createSprite(70, 160,300, 20);
  wall2.shapeColor="darkgreen";
  wall3=createSprite(240,160,300,20);
  wall3.shapeColor="darkgreen";
  wall4=createSprite(260, 50,20, 120);
  wall4.shapeColor="darkgreen";

   wall5 = createSprite(380,100,20,120);
 wall5.shapeColor = "darkgreen";

   wall6 = createSprite(455,120,20,250);
 wall6.shapeColor = "darkgreen";

   wall7 = createSprite(400,235,120,20);
 wall7.shapeColor = "darkgreen";

   wall8 = createSprite(335,285,20,120);
 wall8.shapeColor = "darkgreen";

   wall9 = createSprite(230,235,120,20);
 wall9.shapeColor = "darkgreen";

   wall10 = createSprite(200,340,180,20);
 wall10.shapeColor = "darkgreen";

  wall11 = createSprite(335,380,20,120);
 wall11.shapeColor = "darkgreen";
 
 wall12 = createSprite(120,400,20,120);
 wall12.shapeColor = "darkgreen";

   wall13 = createSprite(280,285,20,120);
 wall13.shapeColor = "darkgreen";

   wall14 = createSprite(110,235,120,20);
 wall14.shapeColor = "darkgreen";

   wall15 = createSprite(60,300,20,120);
 wall15.shapeColor = "darkgreen";

 wall16=createSprite(235,450,220,20);
 wall16.shapeColor="darkgreen";

 wall17=createSprite(60,430,20,180);
 wall17.shapeColor="darkgreen";

 wall18=createSprite(530,320,220,20);
 wall18.shapeColor="darkgreen";

   wall19=createSprite(530,450,20,250);
   wall19.shapeColor="darkgreen";

   wall20=createSprite(200,560,20,80);
   wall20.shapeColor="darkgreen"; 

   wall21=createSprite(310,520,240,20);
   wall21.shapeColor="darkgreen";

   wall22=createSprite(440,560,20,240);
   wall22.shapeColor="darkgreen";


   wall23=createSprite(630,130,180,20);
   wall23.shapeColor="darkgreen";

    wallGroup.add(wall1);
    wallGroup.add(wall2);
    wallGroup.add(wall3);
    wallGroup.add(wall4);
    wallGroup.add(wall5);
    wallGroup.add(wall6);
    wallGroup.add(wall7);
    wallGroup.add(wall8);
    wallGroup.add(wall9);
    wallGroup.add(wall10);
    wallGroup.add(wall11);
    wallGroup.add(wall12);
    wallGroup.add(wall13);
    wallGroup.add(wall14);
    wallGroup.add(wall15);
    wallGroup.add(wall16);
    wallGroup.add(wall17);
    wallGroup.add(wall18);
    wallGroup.add(wall19);
    wallGroup.add(wall20);
    wallGroup.add(wall21);
    wallGroup.add(wall22);
    wallGroup.add(wall23);

}

function draw() {
  background("black");  
  
  if (keyDown(UP_ARROW)){
   Rtank.y=Rtank.y-5;
  }
  
  if (keyDown(DOWN_ARROW)){
    Rtank.y=Rtank.y+5;
   }
  
   if (keyDown(RIGHT_ARROW)){
    Rtank.x=Rtank.x+5;
   }
   
   if (keyDown(LEFT_ARROW)){
    Rtank.x=Rtank.x-5;
   } 
   if (keyDown("w")){
    Btank.y=Btank.y-5;
   }
   
   if (keyDown("s")){
    Btank.y=Btank.y+5;
    }
   
    if (keyDown("d")){
      Btank.x=Btank.x+5;
    }
    
    if (keyDown("a")){
      Btank.x=Btank.x-5;
    }
    if (Btank.isTouching(RUM1)){
      Btank.addImage(BTank2IMG);
      RUM1.destroy();
    }
    else if(Rtank.isTouching(RUM1)){
      Rtank.addImage(RTank2IMG);
      RUM1.destroy();
    }
    if (Btank.isTouching(RUM2)){
      Btank.addImage(BTank3IMG);
      RUM2.destroy();
    }
    else if(Rtank.isTouching(RUM2)){
      Rtank.addImage(RTank3IMG);
      RUM2.destroy();
    }
   
    Rtank.collide(edges);
    Btank.collide(edges);
    bullet1.bounce(edges);
    bullet2.bounce(edges);

  if (wallGroup.isTouching(Rtank)){
    Rtank.bounceOff(wallGroup);
  }

  if (wallGroup.isTouching(Btank)){
    Btank.bounceOff(wallGroup);
  }
  Bullet1();
  Bullet2();
  
   if (bullet2Group.isTouching(wallGroup)||bullet1Group.isTouching(wallGroup)){
     bullet2Group.bounceOff(wallGroup);
      bullet1Group.bounceOff(wallGroup);
    }
     
    if (bullet1Group.isTouching(Rtank)){
      score1=score1+2;
      console.log("working");
      bullet1Group.destroyEach();
    }
    // if (bullet1Group.isTouching(Btank)){
    //   score2=score2+1;
    //   console.log("working");
    //   bullet1Group.destroyEach();
    // }
    // if (bullet2Group.isTouching(Rtank)){
    //   score1=score1+1;
    //   console.log("working");
    //   bulle2Group.destroyEach();
    // }
    if (bullet2Group.isTouching(Btank)){
      score2=score2+2;
      console.log("working");
      bullet2Group.destroyEach();
    }
    
  
  drawSprites();
  
  textSize(30); 
  fill("white"); 
  text("Btank: "+score1,20,34);

  textSize(30); 
  fill("white"); 
  text("Rtank: "+score2,550,34);
}
function Bullet1(){
  if (keyWentDown("g")){
   bullet1=createSprite(Btank.x,Btank.y,10,10);
   bullet1.addImage(smokeIMG);
   bullet1.velocityX=4;
   bullet1Group.add(bullet1);
   
  }
}
function Bullet2(){
  if (keyWentDown("k")){
   bullet2=createSprite(Rtank.x,Rtank.y,10,10);
   bullet2.addImage(smokeIMG);
   bullet2.velocityX=-4;
   bullet2Group.add(bullet2);
  //  bullet2.depth=Rtank.depth;
  //  Rtank.depth=Rtank.depth+1;
  }
}
