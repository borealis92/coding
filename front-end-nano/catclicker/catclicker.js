
let counter = 0;

function clickcat(cat) {
	cat.classList.toggle("open");
}

function clickcounter(){
	counter++;
	document.getElementsByClassName("moves")[0].innerHTML = counter;
	if(counter == 10){
		alert(counter);
	}
};
function catClickHandler(meow) {
	clickcounter();
}