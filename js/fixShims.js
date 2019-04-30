var menuButton = document.querySelector('#menuButton');
var menuButtonSvg = document.querySelector('#menuButtonSvg');
menuButton.children[0].setAttribute('aria-hidden', 'false');

var test = Array.from(menuButton.children);
console.log(menuButton.childNodes[1]);
console.log(menuButton.children[0]);
console.log(test);