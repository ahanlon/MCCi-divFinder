// on page load, using getElementById method to find the div with id of 'content' and adding the css class hidden which sets the display attribute to 'hidden'

window.onload = function() {
	document.getElementById('content').setAttribute('class', 'hidden');
};

// function to be called on button click, removes the css class 'hidden' from the div with the id of 'content'
var showContent = function(){
	document.getElementById('content').removeAttribute('class', 'hidden');
};