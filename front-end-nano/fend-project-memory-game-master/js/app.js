
let moveCounter = 0;

function flipCard(card) {
	card.classList.toggle("open"); //changes the color of the card
    card.classList.toggle("show"); // adds the fa fa symbol
}

function matchCard(element) {
	element.classList.toggle("match"); 
}

function firstFlippedCard(){ // is a function that asks if any card is flipped
	let listOfCards = document.getElementsByClassName("card"); // Get a list of the available cards
	for (let c of listOfCards){ // for loop to loop through all the cards
		if (isCardFlipped(c) === true){ // if the card if flipped
			return c;
		}
	}
	return false; //return the boolean
}

function howManyCardsAreFlipped(){
	let listOfCards = document.getElementsByClassName("card"); // Get a list of the available cards
	let numOfCardsFlipped = 0;
	for (let c of listOfCards){ // for loop to loop through all the cards
		if (isCardFlipped(c) === true){ // if the card if flipped
			numOfCardsFlipped += 1;
		}
	}
	return numOfCardsFlipped; //return the boolean
}

function foundAllMatches(){
	let listOfCards = document.getElementsByClassName("card"); // Get a list of the available cards
	for (let c of listOfCards){ // for loop to loop through all the cards
		if (!isCardMatched(c)){ // if the card if flipped
			return false;
		}
	}
	return true; //return the boolean\
}


function getSymbol(card){
	return card.getElementsByClassName("fa")[0].className;
}

function isCardFlipped(card){ // is a function that asks if a specific card is flipped
	return card.className === "card open show";
}

function isCardMatched(card){ // is a function that asks if a specific card is flipped
	return card.className === "card open show match";
}

function updateMoveCounter() {
	moveCounter++;
	document.getElementsByClassName("moves")[0].innerHTML = moveCounter;

	if (moveCounter == 24 || moveCounter == 32 || moveCounter == 48) {
		let parent = document.getElementsByClassName("stars")[0];
		let child = parent.children[0];
		parent.removeChild(child);
	}
}


function displayFinalScore(){
}


function cardClickHandler(card) {
	//So that the user can not click more than 2 cards at a time.
	if (howManyCardsAreFlipped() >= 2){
		return;
	}
	let past_flipped_card = firstFlippedCard(); // Calls the  finction to see if the card is flipped

	// Since this is the first click on a card, we always just flip it and exit.
	if (past_flipped_card === false) { 
		flipCard(card); // flip the card
		updateMoveCounter();
		return;
	}

	// If a card is flipped, this means the user is clicking on the same card twice	
	if (isCardFlipped(card)){
		return;
	}

	flipCard(card);
	updateMoveCounter();

	//if they are the same symbol then i want the two flipped cards to remain flipped
	//set both cards to the match class
	let second_symbol = getSymbol(card);
	let first_symbol = getSymbol(past_flipped_card);

	if (first_symbol === second_symbol){
		matchCard(past_flipped_card);
		matchCard(card);
		if (foundAllMatches()) {
			displayFinalScore();
		}
		return;
	}

	//flip both cards back because they're not a match
	setTimeout(function() {
		flipCard(past_flipped_card);
		flipCard(card);
	} ,500);
}

function initBoard() {
	// Shuffle all cards
	let deck = document.querySelector('.deck');
	let children = shuffle(deck.children);
	for (let i of children) {
		deck.appendChild(i);
	}
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
initBoard();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


