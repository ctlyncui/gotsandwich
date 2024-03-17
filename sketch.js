//toggle between games
let state = 0;
let begin, tut, again, back, pause, resume;

let user;

let bg,bg2,bg3,bg4,kt;
let t1,t2,c1,c2,s1,s2,breadd,st,sc,sd1,sd2;

let tmt = [];
let cbg = [];
let brd = [];
let chs = [];

let k1 = 0;
let k2 = 0;
let k3 = 0;
let k4 = 0;

let timer = 120;
let title, mainbody;
let bgm;

let complete = true;

let picker = 0;

let order,order2,order3,order4;
let order_pic = order;
let order_type = 0;

function preload(){
		chef = loadImage('img/chef.png');
    t1 = loadImage('img/t1.PNG');
    t2 = loadImage('img/t2.png');
    c1 = loadImage('img/c1.png');
    c2 = loadImage('img/c2.png');
    s1 = loadImage('img/s1.png');
    s2 = loadImage('img/s2.png');

    bin = loadImage('img/bin.png');

    breadd = loadImage('img/bread.png');

    st = loadImage('img/sandwicht.png');
    sc = loadImage('img/sandwichc.png');
    ss = loadImage('img/sandwichs.png');

    sd1 = loadImage('img/sandwich1.png');
    sd2 = loadImage('img/sandwich2.png');
    sd3 = loadImage('img/sandwich3.png');
    sd4 = loadImage('img/sandwich4.png');

		bg = loadImage('img/background.png');
		bg2 = loadImage('img/bg2.png');
		bg3 = loadImage('img/bg3.png');
		bg4 = loadImage('img/bg4.png');
		kt = loadImage('img/kitchen.jpeg');

		basket1 = loadImage('img/tmtbasket.png');
		basket2 = loadImage('img/cbgbasket.png');
		basket3 = loadImage('img/breadbasket.png');
		basket4 = loadImage('img/cheeseslice.png');

		order = loadImage('img/order1.jpg');
		order2 = loadImage('img/order2.jpg');
		order3 = loadImage('img/order3.jpg');
		order4 = loadImage('img/order4.jpg');

   //  title = loadFont('img/title.ttf');
  	// mainbody = loadFont('img/text.ttf');

  	bgm = loadSound("img/bgm.mp3");
}

function setup(){
	background(255);
	let cnv = createCanvas(800,600);
	cnv.parent('#container');
	cnv.style('display','block');
	cnv.style('margin','auto');
	cnv.style('border','1px solid black');

	user = new Player();
	for (let i = 0;i<20;i++){
		let fd = new ingredient(80,height-80,30,t1,t2,0);
		tmt.push(fd);
	}
	for (let i = 0;i<20;i++){
		let fd2 = new ingredient(240,height-80,30,c1,c2,1);
		cbg.push(fd2);
	}
	for (let i = 0;i<20;i++){
		let cs = new ingredient(width-100,170,30,s1,s2,2);
		chs.push(cs);
	}
	for (let i = 0;i<20;i++){
		let br = new bread(400,height-80);
		brd.push(br);
	}	
	
	bgm.play();
}

function draw(){
	if (state == 0){
		pregame();
	}
	else if (state == 1){
		start();
	}
	else if (state == 2){
		tutorial();
	}
	else if (state == 3){
		over();
	}
	else if (state == 4){
		stop();
	}
}

function pregame(){
	background(255);
	imageMode(CORNER);
	image(bg,0,0,800,600);

	fill(255);
  noStroke();
  textSize(50);
  textStyle(BOLD);
  // textFont(title);
  textAlign(CENTER);
  text("START", width/2,height/4*3);
  textSize(25);
  text("HOW TO PLAY", width/2, height/4*3+60)
  
	if(mouseX > width/2-100 && mouseX < width/2+100 && mouseY > height/4*3-25 && mouseY < height/4*3 +25){
	    fill(128);
	    textSize(50);
	    text("START", width/2,height/4*3);
	    begin = true;
	}
	else{
		begin = false;
	}
	if(mouseX > width/2-100 && mouseX < width/2+100 && mouseY > height/4*3+60-25 && mouseY < height/4*3+60+25){
	    fill(128);
	    textSize(25);
	    text("HOW TO PLAY", width/2,height/4*3+60);
	    tut = true;
	}
	else{
		tut = false;
	}

}

function tutorial(){
  imageMode(CORNER);
  image(bg2,0,0);

  fill(248,149,76);
  textSize(50);
  textStyle(BOLD);
  // textFont(title);
  textAlign(CENTER);
  text("TUTORIAL", width/2+150,height/5);

  textSize(20);
  
  // textFont(mainbody);
  text("W A S D: move around", width/2+150,height/4+10);
  text("C: chop food", width/2+150,height/4+35);
  text("P: pick up food", width/2+150,height/4+60);
  text("O: drop food", width/2+150,height/4+85);
  text("F: serve dishes", width/2+150,height/4+110);
  textSize(15);
  text("Make sandwiches according to orders", width/2+150,height/4+150);
	text("Please chop food on the counter for your safety", width/2+150,height/4+170);

  imageMode(CENTER);
  image(sd1,80,height-80);
  image(sd2,240,height-80);
  image(sd3,400,height-80);
  image(sd4,560,height-80);
  image(st,700,height-80);

  textSize(25);
  // textFont(title);
  text("BACK", width/2+150,height/3*2);
  if(mouseX > width/2+50 && mouseX < width/2+250 && mouseY > height/3*2-13 && mouseY < height/3*2 +13){
	    fill(255);
	    textSize(25);
	    text("BACK", width/2+150,height/3*2);
	    back = true;
	}
	else{
		back = false;
	}

  //points introduction to different types of dish
}

function start(){
	background(128);
	imageMode(CORNER);
	image(kt,0,0,800,600);

	fill(0);
  noStroke();
  textSize(30);
  textStyle(BOLD);
  // textFont(title);
  textAlign(CENTER);
  text(`Points:${user.points}`, width/2,60);
  text(`Time left:${timer}`, width/2,100);

  imageMode(CENTER);
  image(bin,width-80,height-80);
  image(basket1,80,height-80);
  image(basket2,240,height-80);
  image(basket3,400,height-80);
  image(basket4,width-80,250);

  user.display();
  tmt[k1].display();
  cbg[k2].display();
  chs[k4].display();
  br = brd[k3];
	br.display();
		
	user.move();
	user.cook();
	let product = user.serve(br);
	if(product == order_type){
		complete = true;
		if(product == 1){
			user.points += 50;
		}
		else if(product == 2){
			user.points += 80;
		}
		else if(product == 3){
			user.points += 50;
		}
		else if(product == 4){
			user.points += 50;
		}
	}

  imageMode(CORNER);
  let rnd = parseInt(random(1,5));
  if( rnd == 1 && complete == true){
  	order_pic = order;
  	order_type = 1;
  	complete = false;
  }
  else if(rnd == 2 && complete == true){
  	order_pic = order2;
  	order_type = 2;
  	complete = false;
  }
  else if(rnd == 3 && complete == true){
  	order_pic = order3;
  	order_type = 3;
  	complete = false;
  }
  else if(rnd == 4 && complete == true){
  	order_pic = order4;
  	order_type = 4;
  	complete = false;
  }
  console.log(rnd);
  console.log(order_pic);
  image(order_pic,40,20,90,90);

  fill(0);
  noStroke();
  textSize(30);
  textStyle(BOLD);
  // textFont(mainbody);
  textAlign(CENTER);
  text("pause", width-100, 60);
  if(mouseX > width-160 && mouseX < width-40 && mouseY > 60-15 && mouseY < 60+15){
	    fill(255);
	    pause = true;
	    text("pause", width-100, 60);
	}
	else{
		pause = false;
	}

  if(frameCount % 60 == 0 && timer >0){
  	timer -- ;
  }
  if(timer == 0){
  	state = 3;
  }

}

class Player {
 	constructor(){
 		this.xPos = 400;
 		this.yPos = 300;
 		this.points = 0;
 		this.add = false;
 		this.pic = chef;
 		console.log("here!");
 	}

 	display(){
 		imageMode(CENTER);
 		image(this.pic, this.xPos, this.yPos);
 	}

 	move(){
 		if(keyIsDown(65)){
 			this.xPos -=3;
 		}
 		if(keyIsDown(68)){
 			this.xPos +=3;
 		}
 		if(keyIsDown(83)){
 			this.yPos +=3;
 		}
 		if(keyIsDown(87)){
 			this.yPos -=3;
 		}

 		this.xPos = constrain(this.xPos, 100,700);
 		this.yPos = constrain(this.yPos, 100,500);
 	}

 	cook(){

 		if(keyIsDown(67) && this.yPos<=300 && this.yPos>=220){
 			console.log("chopchop");
 			tmt[k1].chopped(user);
 			cbg[k2].chopped(user);
 			chs[k4].chopped(user);
 		}
 		if(keyIsDown(80)){
 			console.log("p");
 			tmt[k1].picked(user);
 			cbg[k2].picked(user);
 			brd[k3].picked(user);
 			chs[k4].picked(user);
 		}
 		if(keyIsDown(79)){
 			tmt[k1].dropped();
 			cbg[k2].dropped();
 			brd[k3].dropped();
 			chs[k4].dropped();
 		}
 	}

 	serve(fd){
 		if(keyIsDown(70)){
 			let temp = br.serve(user);
 			if(temp == 1 && br.served == false){
 				br.served = false;
 				return 1;
 			}
 			if(temp == 2 && br.served == false){
 				br.served = false;
 				return 2;
 			}
 			if(temp == 3 && br.served == false){
 				br.served = false;
 				return 3;
 			}
 			if(temp == 4 && br.served == false){
 				br.served = false;
 				return 4;
 			}
 			console.log("b");
 		}
 	}
}

class ingredient{
	constructor(x,y, pt,pic,pic2,t){
		this.xPos = x;
		this.yPos = y;
		this.points = pt;
		this.pic = pic;
		this.chop = pic2;
		this.type = t;

		this.chosen = false;
		this.cut = false;
	}

	display(){
			imageMode(CENTER);
			image(this.pic,this.xPos,this.yPos);

			if (this.chosen == true){
				this.xPos = user.xPos+20;
				this.yPos = user.yPos+20;
			}
	}

	picked(p){
		if (dist(p.xPos, p.yPos, this.xPos, this.yPos) <= 40){
			this.chosen = true;	
		}
	}

	dropped(p){
		this.chosen = false;
		if(dist(this.xPos,this.yPos, width-80, height-80)<=40){
			this.xPos = 1000;
		 	this.yPos = 1000;
		 	if(this.type == 0){
		 		k1++;
		 	}
		 	else if(this.type == 1){
		 		k2 ++;
		 	}
		 	else if(this.type == 2){
		 		k4 ++;
		 	}
		}
		if(dist(br.xPos,br.yPos, this.xPos,this.yPos)<=40 && this.cut == true){
			if(this.type == 0 && br.type == 0){
				br.switch(st);
				br.type = 11; //only tomato
				this.xPos = 1000;
		 		this.yPos = 1000;
		 		k1++;
			}
			else if(this.type == 0 && br.type == 12){
				br.switch(sd1);
				br.type = 2; //tmt & cbg
				this.xPos = 1000;
		 		this.yPos = 1000;
		 		k1++;
			}
			else if(this.type == 0 && br.type == 7){
				br.switch(sd4); //tmt & chs
				br.type = 5;
				this.xPos = 1000;
				this.yPos = 1000;
				k1++;
			}
			else if (this.type == 0 && br.type == 4){
				br.switch(sd2);
				br.type = 3; //all 3
				this.xPos = 1000;
				this.yPos = 1000;
				k1++;
			}

			else if(this.type == 1 && br.type == 0){
				br.switch(sc);
				br.type = 12; //only cabbage
				this.xPos = 1000;
		 		this.yPos = 1000;
		 		k2++;
			}
			else if(this.type == 1 && br.type == 11){
				br.switch(sd1);
				br.type = 2; //tmt & cbg
				this.xPos = 1000;
		 		this.yPos = 1000;
		 		k2++;
			}
			else if(this.type == 1 && br.type == 7){
				br.switch(sd3);
				br.type = 4; //cbg & chs
				this.xPos = 1000;
		 		this.yPos = 1000;
		 		k2++;
			}
			else if(this.type == 1 && br.type == 5){
				br.switch(sd2);
				br.type = 3; //cbg & chs
				this.xPos = 1000;
		 		this.yPos = 1000;
		 		k2++;
			}


			else if(this.type == 2 && br.type == 0){
				br.switch(ss);
				br.type = 7; //only cheese
				this.xPos = 1000;
				this.yPos = 1000;
				k4++;
			}
			else if(this.type == 2 && br.type == 11){
				br.switch(sd4);
				br.type = 5;
				this.xPos = 1000;
				this.yPos = 1000;
				k4++;
			}
			else if(this.type == 2 && br.type == 12){
				br.switch(sd3);
				br.type = 4;
				this.xPos = 1000;
				this.yPos = 1000;
				k4++;
			}
			else if(this.type = 2 && br.type == 2){
				br.switch(sd2);
				br.type = 3; //all 3
				this.xPos = 1000;
				this.yPos = 1000;
				k4++;
			}

		}
	}

	chopped(p){
		if (this.cut == false && dist(p.xPos, p.yPos, this.xPos, this.yPos) <= 40){
			console.log("done");
			this.pic = this.chop;
			p.points += 5;
			this.cut = true;
		}
	}
}

class bread{
	constructor(x,y){
		this.xPos = x;
		this.yPos = y;
		this.pic = breadd;
		this.chosen = false;
		this.points = 80;
		this.type = 0;

		this.served = false;
	}

	display(){
		imageMode(CENTER);
		image(this.pic,this.xPos,this.yPos);

		if (this.chosen == true){
			this.xPos = user.xPos+20;
			this.yPos = user.yPos+20;
		}
	}

	picked(p){
		if (dist(p.xPos, p.yPos, this.xPos, this.yPos) <= 40){
			console.log("triggered");
			this.chosen = true;
		}
	}

	dropped(p){
		console.log("bye")
		this.chosen = false;
		if(dist(this.xPos,this.yPos, width-80, height-80)<=40){
			this.xPos = 1000;
		 	this.yPos = 1000;
		 	k3++;
		}
	}

	switch(pic){
		this.pic = pic;
	}

	serve(p){
		if(dist(p.xPos, p.yPos, this.xPos, this.yPos) <= 40 ){
			// player.serve(this);
			this.xPos = 1000;
			this.yPos = 1000;
			brd.splice(k3,1);
			if (br.type==2){
				return 1;
			}
			else if (br.type==3){
				return 2;
			}
			else if (br.type==4){
				return 3;
			}
			else if (br.type==5){
				return 4;
			}
		}
	}
}


function over(){
  clear();
  textAlign(CENTER);
  background(220);

  imageMode(CORNER);
  image(bg3,0,0);

  fill(255);
  textSize(50);
  textStyle(BOLD);
  // textFont(title);
  text("Congratulations!", width/3*2, height/4);
  text(`Score: ${user.points}`, width/3*2+70,height/4+50)
  text("Start Over?", width/3*2+70, height/3*2);

  if(mouseX > width/3*2-150 && mouseX < width/3*2+150 && mouseY > height/3*2-25 && mouseY <height/3*2+25){
    fill(128);
    text("Start Over?", width/3*2+70, height/3*2);
    again = true;
  }else{
    again = false;
  }
}

function stop(){
	background(220);
	imageMode(CORNER);
  image(bg4,0,0);

	textSize(50);
  noStroke();
  // textFont(title);
  fill(255);
  text("Resume", width/2, height/5*4+20);
  if(mouseX > width/2-75 && mouseX < width/2+75 && mouseY > height/5*4-5 && mouseY <height/5*4+45){
    fill(128);
    text("Resume", width/2, height/5*4+20);
    resume = true;
  }else{
    resume = false;
  }	 
}

function mouseClicked(){
	if (begin == true){
		state = 1;
		begin = false;
	}
	if (tut == true){
		state = 2;
		tut = false;
	}
	if (again == true || back == true){
		state = 0;
		back = false;
		again = false;
		timer = 120;

		user.points = 0;
		//reset the array & position
		for (let i = 0;i<20;i++){
			let fd = new ingredient(80,height-80,30,t1,t2,0);
			tmt[i] = fd;
		}
		for (let i = 0;i<20;i++){
			let fd2 = new ingredient(240,height-80,30,c1,c2,1);
			cbg[i] = fd2;
		}
		for (let i = 0;i<20;i++){
			let br = new bread(400,height-80);
			brd[i] = br;
		}
		for (let i = 0;i<20;i++){
			let cs = new ingredient(width-100,170,30,s1,s2,2);
			chs[i] = cs;
		}
	}
	if (pause == true){
		state = 4;
		pause = false;
	}
	if (resume == true){
		state = 1;
		resume = false;
	}
}

