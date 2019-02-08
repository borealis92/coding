
let counter = 0;
let counter2 = 0;

function clickcat(cat) {
	cat.classList.toggle("open");
}

function clickcat2(cat2) {
	cat2.classList.toggle("open2");
}

function clickcounter(){
	counter++;
	document.getElementsByClassName("moves")[0].innerHTML = counter;
	if(counter == 10){
		alert(counter);
	}
};
function clickcounter2(){
	counter2++;
	document.getElementsByClassName("moves2")[0].innerHTML = counter2;
	if(counter2 == 10){
		alert(counter2);
	}
};

function catClickHandler() {
	clickcounter();
}
function catClickHandler2() {
	clickcounter2();
}