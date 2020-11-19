var externalIcon = document.getElementsByClassName('icon')


function copyTextToClipboard(text) {
	var dummy = document.createElement('textarea');
	dummy.value = text;
	document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

function copyMsgVanishing(index) {
	var copyMsg = document.getElementById(index);
	copyMsg.opacity = 1;
	var itrNum = 0;
	var ti = setInterval(event => {
		itrNum += 1;
		copyMsg.style.opacity = 1 - itrNum * 0.02;

		if(itrNum >= 50) {
			clearInterval(ti);
			copyMsg.style.opacity = 0;
		}
	}, 45);
}

// icon events
// fb
externalIcon[0].addEventListener('click', event => {
	var url = 'https://www.facebook.com/johnson.kao.543';
	window.open(url, '_blank');
});

// github
externalIcon[1].addEventListener('click', event => {
	var url = 'https://github.com/obe1one';
	window.open(url, '_blank');
});

// email
externalIcon[2].addEventListener('click', event => {
	copyTextToClipboard('b07902046@ntu.edu.tw');
	copyMsgVanishing('copy-msg');
});

// line
externalIcon[3].addEventListener('click', event => {
	copyTextToClipboard('johnson30708');
	copyMsgVanishing('copy-msg');
});

// phone
externalIcon[4].addEventListener('click', event => {
	copyTextToClipboard('+886978950902');
	copyMsgVanishing('copy-msg');

});

function copyText(message) {
	var dummy = document.createElement('textarea');
	document.body.appendChild(dummy);
	dummy.value = message;
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);
}
