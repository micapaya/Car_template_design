function getScrollPos(){
	return window.scrollY;
}

let previousScroll = 0

function moovePic(){
	// let element = document.getElementsByClassName('toto');
	// element.style.top = '100vh';
	let Y = getScrollPos();
	let div = document.getElementById('pic1');

	div.style.marginRight = (-Y/1.5) + "px";
}

function colorChange(){
	let para = document.getElementsByClassName('cache');
	let headTitle = document.getElementsByClassName('title');
	let cite = document.getElementById('quote1')
	for(let i=0; i<para.length; i++)
	{
    if(getScrollPos() > previousScroll)
    {
    	para[i].style.color = "white";
    	cite.style.color= "white";
    	cite.style.backgroundColor = "darkgoldenrod";
    	cite.style.marginLeft = "37vw"
    	para[i].style.marginLeft = "20vw";
    	para[1].style.marginLeft = "30vw";
    	headTitle[0].style.marginTop ='130px';
    	headTitle[0].style.marginLeft ='-60%';
    	headTitle[0].style.fontSize ='6em';
    	headTitle[0].style.height ='100px';
//h1
    	headTitle[1].style.marginTop ='425px';
    	headTitle[1].style.marginLeft ='-40%';
    	headTitle[1].style.color= "white";

    	
		

   
	} else {
		para[i].style.color = "black";
		cite.style.color= "transparent";
		cite.style.backgroundColor = "transparent";
		cite.style.marginLeft = "50vw"
		para[i].style.marginLeft = "15vw";
		para[1].style.marginLeft = "15vw";
    	headTitle[0].style.marginTop ='100px';
    	headTitle[0].style.marginLeft ='-30%';
    	headTitle[0].style.fontSize ='9em';
    	headTitle[0].style.height ='135px';
//h1
    	headTitle[1].style.marginTop ='400px';
    	headTitle[1].style.marginLeft ='-35%';
    	headTitle[1].style.color= "transparent";
    	
	

	}
	}
}

window.addEventListener('scroll', function(e) { 
	colorChange()
	moovePic();
	previousScroll = getScrollPos();
});	