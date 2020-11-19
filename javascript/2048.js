
const k_d = 68;
const k_w = 87;
const k_a = 65;
const k_s = 83;

function blockInfo(node) {
	this.node = node;
	this.row = 0;
	this.col = 0;
	this.score = 0;
}

const blockLen = 140;
const gapLen = 5;
var cells = document.getElementsByClassName('game__board-block');
var blocks = [];
const blockNum = 16;

for(var i = 0; i < blockNum; i++) {
	blocks[i] = new blockInfo(cells[i]);
}

function moveRow(id, dir) {
	var time = 0;
	blocks[id].row -= gapLen * dir;
	var ani = setInterval(function() {
		if(time == blockLen / 5) clearInterval(ani);
		blocks[id].row -= 5 * dir;
		blocks[id].node.style.top = blocks[id].row + 'px';
		time += 1;
	}, 5);
}

function moveCol(id, dir) {
	var time = 0;
	blocks[id].col -= gapLen * dir;
	var ani = setInterval(function() {
		if(time == blockLen / 5) clearInterval(ani);
		blocks[id].col -= 5 * dir;
		blocks[id].node.style.right = blocks[id].col + 'px';
		time += 1;
	}, 5);
}

blocks[12].node.style.backgroundColor = 'orange';


document.addEventListener('keyup', event => {
	if(event.keyCode === k_w) {
		moveRow(12, 1);
	}
	else if(event.keyCode === k_d) {
		moveCol(12, 1);
	}
	else if(event.keyCode === k_s) {
		moveRow(12, -1);
	}
	else if(event.keyCode === k_a) {
		moveCol(12, -1);
	}
});
