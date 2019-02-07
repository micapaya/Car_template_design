

function getScrollPos(){
	return window.scrollY;
}
function getScrollPosSmooth(){
	return window.scrollY/6;
}


let previousScroll = 0 ;
let windowsizeY = window.innerHeight;
let documentSizeY = document.body.offsetHeight;
console.log(documentSizeY);



function moovePic(){
	// let element = document.getElementsByClassName('toto');
	// element.style.top = '100vh';
	let Y = getScrollPosSmooth();
	let div = document.getElementById('pic1');
	// let nightPic = document.getElementById('night');


	div.style.marginRight = (-Y) + "px";
	// nightPic.style.borderRadius = (Y/10) + "%" ;
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


    	
		

   
	} else if (getScrollPos() <= windowsizeY/1.5) {
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
		para1.style.transform = 'rotate3d(0,1,0,90deg)';
		para2.style.marginTop = '100px';
		para2.style.transform = 'rotate3d(0,1,0,90deg)';
		para3.style.marginTop = '150px';
		para3.style.transform = 'rotate3d(0,1,0,-90deg)';
		

	}
function showSection2(){
	let targetStyleSection2 = document.getElementById('sec2');
	let para1 = document.getElementById('sec2__par1');
	let para2 = document.getElementById('image_para');
	let para3 = document.getElementById('sec2__par3');
		para1.style.marginTop = '75px';
		para1.style.transform = 'rotate3d(0,1,0,0deg)';
		para2.style.marginTop = '135px';
		para2.style.transform = 'rotate3d(0,1,0,0deg)';
		para3.style.marginTop = '445px';
		para3.style.transform = 'rotate3d(0,1,0,0deg)';


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

function hiddeQuotes (){
	let quotes = document.getElementById('inSec3');
	quotes.style.transform = 'rotate3d(1,0,0,90deg)';

}

function showQuotes (){
	let quotes = document.getElementById('inSec3');
	quotes.style.transform = 'rotate3d(1,0,0,0deg)';

}

window.addEventListener("scroll", function(e) {   
    // met en surbrillance la cible de mouseenter
     
     if (getScrollPos() >= windowsizeY*2 ) {
		showQuotes();
	} else if (getScrollPos() < (documentSizeY+250) - windowsizeY ){
		hiddeQuotes();
	}
});


function paravideoShow(){
	let paraLeft = document.getElementsByClassName('video_1');
	let paraRight = document.getElementsByClassName('video_2');
	let maskTop = document.getElementById('maskTop');
	let maskBottom = document.getElementById('maskBottom');

	let video = document.getElementById('video1');

		paraLeft[0].style.marginLeft = '5vw';
		paraRight[0].style.marginLeft = '70vw';
		maskTop.style.height = '115px';
		maskBottom.style.height = '132px';
		video.play();
		
}

function paravideoHidde(){
	let paraLeft = document.getElementsByClassName('video_1');
	let paraRight = document.getElementsByClassName('video_2');
	let maskTop = document.getElementById('maskTop');
	let maskBottom = document.getElementById('maskBottom');
	let video = document.getElementById('video1');


		paraLeft[0].style.marginLeft = '-50vw';
		paraRight[0].style.marginLeft = '130vw';
		maskTop.style.height = '415px';
		maskBottom.style.height = '432px';
		video.currentTime = 20.0;
		video.pause();
		
}
window.addEventListener("scroll", function(e) {   
    // met en surbrillance la cible de mouseenter
     
     if (getScrollPos() >= windowsizeY*3 ) {
     	paravideoShow();
		UnswitchParaFrame2();

	} else if (getScrollPos() <= windowsizeY*3 ){
		paravideoHidde();
		switchParaFrame2();
	}
});




window.onmousemove = logMouseMoveX;

function logMouseMoveX(e) {
	let parrallax = document.getElementById('background_parallax');
	e = event || window.event;	
	mousePos = { x: e.clientX };
	


	if (e.clientX < 650) {
		parrallax.style.backgroundPosition = '5% -140px , 55% 320px , 60% 50px';
		
	} else {
		parrallax.style.backgroundPosition = '15% -40px , 95% 320px , 110% 180px';
	}


}


let Switch = document.getElementById('switcher');
let ToogleVideo = true;

Switch.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
    if(ToogleVideo){
      switchVideo();
      ToogleVideo = false;
    } else {
    	UnswitchVideo();
    	ToogleVideo = true;
    }
});

function switchVideo(){
	let frameVideo1 = document.getElementById('switchable');
	let frameVideo2 = document.getElementById('frame2');
	let maskTop = document.getElementById('maskTop');
	let maskBottom = document.getElementById('maskBottom');
	
	

	frameVideo1.style.marginLeft = '-200vw';
	frameVideo2.style.marginLeft = '0';
	maskTop.style.marginLeft = '200vw';
	maskBottom.style.marginLeft = '200vw';
	Switch.style.transform = 'rotate3d(0,1,0,180deg)';
	UnswitchParaFrame2();
	
}

function UnswitchVideo(){
	let frameVideo1 = document.getElementById('switchable');
	let frameVideo2 = document.getElementById('frame2');
	let maskTop = document.getElementById('maskTop');
	let maskBottom = document.getElementById('maskBottom');
	

	
	frameVideo1.style.marginLeft = '0';
	frameVideo2.style.marginLeft = '100vw';
	maskTop.style.marginLeft = '0';
	maskBottom.style.marginLeft = '0';
	Switch.style.transform = 'rotate3d(0,1,0,0deg)';
	switchParaFrame2();
	
}

function switchParaFrame2(){
	let paraFrame1 = document.getElementsByClassName('video_3');
	let paraFrame2 = document.getElementsByClassName('video_4');
	paraFrame1[0].style.marginLeft = '400vw';
	paraFrame2[0].style.marginLeft = '255vw';
}

function UnswitchParaFrame2(){
	let paraFrame1 = document.getElementsByClassName('video_3');
	let paraFrame2 = document.getElementsByClassName('video_4');
	paraFrame1[0].style.marginLeft = '5vw';
	paraFrame2[0].style.marginLeft = '55vw';
	
}





// function scrollIt(destination, duration = 200, easing = 'linear', callback) {
//   // object with some some timing functions
//   // function body here
// }

// function scrollIt(destination, duration = 200, easing = 'linear', callback) {

//   const easings = {
//     linear(t) {
//       return t;
//     },
//     easeInQuad(t) {
//       return t * t;
//     },
//     easeOutQuad(t) {
//       return t * (2 - t);
//     },
//     easeInOutQuad(t) {
//       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//     },
//     easeInCubic(t) {
//       return t * t * t;
//     },
//     easeOutCubic(t) {
//       return (--t) * t * t + 1;
//     },
//     easeInOutCubic(t) {
//       return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//     },
//     easeInQuart(t) {
//       return t * t * t * t;
//     },
//     easeOutQuart(t) {
//       return 1 - (--t) * t * t * t;
//     },
//     easeInOutQuart(t) {
//       return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
//     },
//     easeInQuint(t) {
//       return t * t * t * t * t;
//     },
//     easeOutQuint(t) {
//       return 1 + (--t) * t * t * t * t;
//     },
//     easeInOutQuint(t) {
//       return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
//     }
//   };

//   const start = window.pageYOffset;
//   const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

//   const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
//   const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
//   const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
//   const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

//   if ('requestAnimationFrame' in window === false) {
//     window.scroll(0, destinationOffsetToScroll);
//     if (callback) {
//       callback();
//     }
//     return;
//   }

//   function scroll() {
//     const now = 'now' in window.performance ? performance.now() : new Date().getTime();
//     const time = Math.min(1, ((now - startTime) / duration));
//     const timeFunction = easings[easing](time);
//     window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

//     if (window.pageYOffset === destinationOffsetToScroll) {
//       if (callback) {
//         callback();
//       }
//       return;
//     }

//     requestAnimationFrame(scroll);
//   }

//   scroll();
// }