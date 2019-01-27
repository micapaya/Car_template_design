

function getScrollPos(){
	return window.scrollY;
}

let previousScroll = 0 ;
let windowsizeY = window.innerHeight;

function moovePic(){
	// let element = document.getElementsByClassName('toto');
	// element.style.top = '100vh';
	let Y = getScrollPos();
	let div = document.getElementById('pic1');

	div.style.marginRight = (-Y/4) + "px";
	
}

function colorChange(){
	let pictureBG = document.getElementById('backPic');
	let para = document.getElementsByClassName('cache');
	let headTitle = document.getElementsByClassName('title');
	let cite = document.getElementById('quote1')
	let picIn = document.getElementById('pic');
	let logo = document.getElementById('logo007');
	let underline = document.getElementById('underlinequote')
	for(let i=0; i<para.length; i++)
	{
    if(getScrollPos() > previousScroll)
    {
    	pictureBG.style.background = "#191919";
    	para[i].style.color = "white";
    	cite.style.color= "white";
    	cite.style.backgroundColor = "#10181E";
    	cite.style.marginLeft = "37vw";
    	underline.style.width = "30vw";
    	underline.style.marginLeft = "-10px";

    	para[i].style.marginLeft = "28vw";
    	para[1].style.marginLeft = "30vw";
    	para[2].style.marginLeft = "32vw";
    	headTitle[0].style.marginTop ='130px';
    	headTitle[0].style.marginLeft ='-60%';
    	headTitle[0].style.fontSize ='6em';
    	headTitle[0].style.height ='100px';
//h1
    	headTitle[1].style.marginTop ='690px';
    	headTitle[1].style.marginLeft ='-40%';


    	picIn.style.opacity = "1";
    	logo.style.opacity = "1";
    	logo.style.right = "100px";


    	
		

   
	} else if (getScrollPos() <= windowsizeY/1.2) {
		pictureBG.style.background = "#040508";
		para[i].style.color = "transparent";
		cite.style.color= "transparent";
		cite.style.backgroundColor = "transparent";
		cite.style.marginLeft = "50vw"
		para[i].style.marginLeft = "25vw";
		para[1].style.marginLeft = "15vw";
		para[2].style.marginLeft = "100vw";
    	headTitle[0].style.marginTop ='100px';
    	headTitle[0].style.marginLeft ='-43%';
    	headTitle[0].style.fontSize ='9em';
    	headTitle[0].style.height ='135px';
//h1
    	headTitle[1].style.marginTop ='130vh';
    	headTitle[1].style.marginLeft ='-60%';
    	picIn.style.opacity = "0";
    	logo.style.opacity = "0";
    	logo.style.right = "-200px";
    	underline.style.width = "100vw";
    	underline.style.marginLeft = "-53vw";
    	
	

	}
	}
}

window.addEventListener('scroll', function(e) { 
	colorChange();
	moovePic();
	previousScroll = getScrollPos();
});	



let counter = 0;


let interval = null;

function finish() {
	clearInterval(interval);
	document.getElementById('cm').innerHTML = counter;


}

function bip(){
	counter = counter+20;
	if (counter >= 4735) finish();
	else{
		document.getElementById('cm').innerHTML = counter ;
	}
}
function start(){
	if(counter === 4735){
		finish();

	}
	else{
	interval = setInterval(bip,1);
	}
}


let counter1 = 0;
let interval1 = null;

function finish1() {
	clearInterval(interval1);
	document.getElementById('ch').innerHTML = counter1;


}

function bip1(){
	counter1 = counter1+2;
	if (counter1 >= 436) finish1();
	else{
		document.getElementById('ch').innerHTML = counter1 ;
	}
}
function start1(){
	if(counter1 === 436){
		finish1();

	}
	else{
	interval1 = setInterval(bip1,1);
	}
}


let counter2 = 0;
let interval2 = null;

function finish2() {
	clearInterval(interval2);
	document.getElementById('km').innerHTML = counter2;


}

function bip2(){
	counter2 = counter2+1;
	if (counter2 >= 310) finish2();
	else{
		document.getElementById('km').innerHTML = counter2 ;
	}
}
function start2(){
	if(counter2 === 310){
		finish2();

	}
	else{
	interval2 = setInterval(bip2,1);
	}
}



let counter3 = 0;
let interval3 = null;

function finish3() {
	clearInterval(interval3);
	document.getElementById('nm').innerHTML = counter3;


}

function bip3(){
	counter3 = counter3+2;
	if (counter3 >= 490) finish3();
	else{
		document.getElementById('nm').innerHTML = counter3 ;
	}
}
function start3(){
	if(counter3 === 490){
		finish3();

	}
	else{
	interval3 = setInterval(bip3,1);
	}
}


function playSkills() {
	start();
	start1();
	start2();
	start3();

}


	let button = document.getElementById('skills_button');
	let containSkills = document.getElementById('containerSkills');
	let cross1 = document.getElementById('cross_1');
	let cross2 = document.getElementById('cross_2');
	let PanToggle = true;

	button.addEventListener("click", function( event ) {   
    	if(PanToggle){
    		cross1.style.transform = 'rotate(135deg)';
    		cross1.style.transformOrigin = '4.5px 1px';
    		cross1.style.background = 'white';
    		cross2.style.transform = 'rotate(-135deg)';
    		cross2.style.transformOrigin = '4.5px 1px';
    		cross2.style.background = 'white';
    		button.style.color = 'white';
    		button.style.borderBottom = '0.1px solid white';
    		containSkills.style.right = '0';
    		setTimeout(playSkills, 1200);
    		PanToggle = false;
    	}
    	else {
    		cross1.style.transform = 'rotate(-45deg)';
    		cross1.style.transformOrigin = '1.5px 1px';
    		cross1.style.background = '#919C99';
    		cross2.style.transform = 'rotate(45deg)';
    		cross2.style.transformOrigin = '1.5px 1px';
    		cross2.style.background = '#919C99';
    		button.style.color = '#919C99';
    		button.style.borderBottom = '0.1px solid #919C99';
    		containSkills.style.right = '-55vw';
    		PanToggle = true;
    	}
	});


function hiddeSection2(){
	let targetStyleSection2 = document.getElementById('sec2');
	let para1 = document.getElementById('sec2__par1');
	let para2 = document.getElementById('image_para');
	let para3 = document.getElementById('sec2__par3');
		targetStyleSection2.style.opacity = '0';
		para1.style.marginTop = '50px';
		para1.style.transform = 'rotate(10deg)';
		para2.style.marginTop = '100px';
		para2.style.transform = 'rotate(10deg)';
		para3.style.marginTop = '150px';
		para3.style.transform = 'rotate(10deg)';

	}
function showSection2(){
	let targetStyleSection2 = document.getElementById('sec2');
	let para1 = document.getElementById('sec2__par1');
	let para2 = document.getElementById('image_para');
	let para3 = document.getElementById('sec2__par3');
		para1.style.marginTop = '75px';
		para1.style.transform = 'rotate(0deg)';
		para2.style.marginTop = '135px';
		para2.style.transform = 'rotate(0deg)';
		para3.style.marginTop = '305px';
		para3.style.transform = 'rotate(0deg)';


		targetStyleSection2.style.opacity = '1';
	}

window.addEventListener("scroll", function(e) {   
    // met en surbrillance la cible de mouseenter
     
     if (getScrollPos() >= windowsizeY/1.5 ) {
		showSection2();
	} else if (getScrollPos() <= windowsizeY/0.2 ){
		hiddeSection2();
	}
});