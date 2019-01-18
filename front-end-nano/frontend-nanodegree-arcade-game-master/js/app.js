// Generate a reasonable speed that enemies can use.
var enemySpeed = function(){
   return Math.floor(Math.random() * 500) + 100;
};

// Construct a bug by loading its inage and giving it start cordinates. 
var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    
};

// Updates the bug's position in its lane. If it goes too far, reset it.
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if(this.x >= 600){
        this.x = -100;
        this.speed = enemySpeed();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Construct a player by loading its image and giving it start coordinates.
var Player = function(x, y, enemies) {
    this.sprite = 'images/char-boy.png';
    this.start_x = x;
    this.start_y = y;
    this.x = x;
    this.y = y;
    this.enemies = enemies;
    this.lives = 3;
    document.getElementById("lives").innerHTML = "Lives: " + this.lives;
};

// Resets the player correctly on the page.
Player.prototype.reset = function() {
    this.x = this.start_x;
    this.y = this.start_y;
    this.lives -= 1;
    document.getElementById("lives").innerHTML = "Lives: " + this.lives;
    if(this.lives == 0){
        alert("You Lose");
        this.lives = 3;
        document.getElementById("lives").innerHTML = "Lives: " + this.lives;
    }
}
// When the player reaches the water it means you win!
Player.prototype.winreset = function() {
    this.x = this.start_x;
    this.y = this.start_y;
    if (this.won === false) {
        this.won = true;
        alert("You Made it!");
    }
}
// When the player runs into a bug or water it resets the players position
Player.prototype.update = function() {
    for (var i = 0; i < this.enemies.length; i++) {
        var dx = this.x - this.enemies[i].x;
        var dy = this.y - this.enemies[i].y;
        if (dx < 0) { dx *= -1; }
        if (dy < 0) { dy *= -1; }
        var is_close_to_bug = dx < 50 && dy < 40;
        if(is_close_to_bug) {
            this.reset();
        }
    }

    var is_in_water = this.y < 50;
    if(is_in_water){
        setTimeout(this.winreset.bind(this), 200);
    }
};

// Draws the image on the page
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This moves the character with the keys.
Player.prototype.handleInput = function(arg) {
    if(arg == 'left' && this.x > 100){
        this.x -= 101;
    }
    if(arg == 'right' && this.x < 400){
        this.x += 101;
    }
    if(arg == 'down' && this.y < 350){
        this.y += 83;
    }
    if(arg == 'up' && this.y > 50){
        this.y -= 83;
    }
    this.won = false;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var e = new Enemy(-100, 60, enemySpeed());
var e2 = new Enemy(-100, 143, enemySpeed());
var e3 = new Enemy(-100, 226, enemySpeed());
var allEnemies = [e, e2, e3];

var player = new Player(202,392, allEnemies);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
