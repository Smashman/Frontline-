var game = new Phaser.Game(1280, 1000, Phaser.AUTO, '', { preload: preload, create: create, update: update });
// game.stage.smoothed = false;

var spritesheet = 'images/FRONTLINE_BATTLESHIP_SPRITE_SHEET.png';
var atlas = 'images/battleship_atlas.json'

function preload() {
	game.load.atlas('battleship', spritesheet, atlas);
}

function create() {
	// game.stage.smoothed = false;
	// game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;  
	// game.scale.setUserScale(4, 4);
	var grid = game.add.sprite(game.world.centerX, game.world.centerY, 'battleship', 'grid');
	grid.anchor.setTo(0.5, 0.5);
	grid.smoothed = false;
	grid.scale.setTo(3,3);
}

function update() {
}