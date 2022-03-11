let image = document.querySelector('img');

image.onclick = function()
{

	let mySrc = image.getAttribute('src');

	/* Set the new source */
	if(mySrc === 'images/chaos.jpg') {
		image.setAttribute('src', 'images/leif_business.png');
	} else {
		image.setAttribute('src', 'images/chaos.jpg');
	}
}

/* Lets store h1 and button */
let myHead = document.querySelector('h1');
let myButton = document.querySelector('button');

/* Create function for it */
function setUserName() {

	let myName = prompt("Please enter your name.");
	if(!myName)
	{
		setUserName();
	}
	else {
		
		localStorage.setItem("name", myName);
		myHead.textContent = "Hello, " + myName;
	}

}

if(!localStorage.getItem("name"))
{
	setUserName();
} else {
	let myNameNow = localStorage.getItem("name");
	myHead.textContent = "Hello, " + myNameNow;	
}

myButton.onclick = function()
{
	setUserName();
}

