var svgToAnimate = document.querySelector("#morph");
var svg = Array.from(svgToAnimate.childNodes);
console.log(svgToAnimate);

var sect1 = document.getElementById('sect1');
var overlay = document.getElementById('morph');

var morphing = anime({
    targets: '.morph',
    d: [
        {value: `M-0.5,1079.5h1920l1-638c-17.1,78.3-150.1,211.3-498,297c-91.4,22.5-220.9,17-290,14
        c-211.2-9.1-336.5-54.6-436-74c-150.2-29.3-377.2-25.7-697,140C-0.5,905.5-0.5,992.5-0.5,1079.5`},
        {value: `M-0.5,1079.5h1920l1-1080c-68,1-149,0-331,0c-94.2,0-268.8-0.3-338,0c-208,1-394.6-0.7-496,0
        c-148,1-386,0-755,0C0.5,86.5-0.5,992.5-0.5,1079.5`}
    ], 
    easing: 'easeInOutExpo'
})

//var initialPaths = svgToAnimate.querySelectorAll(shapes);
////var textPaths = text.querySelectorAll('path');

// var pathEls = document.querySelectorAll('path');
// for (var i = 0; i < pathEls.length; i++) {
//   var pathEl = pathEls[i];
//   var offset = anime.setDashoffset(pathEl);
//   pathEl.setAttribute('stroke-dashoffset', offset);
//   anime({
//     targets: pathEl,
//     strokeDashoffset: [offset, 0],
//     duration: anime.random(1000, 3000),
//     delay: anime.random(0, 2000),
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     autoplay: true
//   });
// }

class TypeWriter{
    constructor(txtElement, words, wait = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type(){
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // check if deleting
        if(this.isDeleting){
            //Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }else{
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /= 2;
        }

        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init Typewriter
    new TypeWriter(txtElement, words, Number(wait) );
}

var nav = document.querySelector(".menu");
//nav.classList.toggle("")
console.log(nav)