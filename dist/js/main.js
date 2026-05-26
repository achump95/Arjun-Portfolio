/* MAIN.JS
 * --------------------------------------------------
 *  Example JS file with best practices based on a 
 *  podcast from DevTips:
 *  https://www.youtube.com/watch?v=RMiTxHba5fo 
 *  
 *  !IMPORTANT!
 *  gulp-purgecss will remove css for classes that are 
 *  added with JS. You can whitelist these classes 
 *  by adding them in gulpfile.js [line 232]
*/

const currentYear = new Date().getFullYear();
let util = UIkit.util;
let totop = util.$("#totop");

document.addEventListener("DOMContentLoaded", () => {
    [].forEach.call(document.querySelectorAll('.current-year'), function (el) {
        el.textContent = currentYear;
    });

    document.body.classList.add('page-loaded');
});

window.addEventListener('load', (event) => {
    if (window.pageYOffset > (window.innerHeight/2)) {
        util.addClass(totop, "uk-active");
    }
});

window.addEventListener("scroll", function() {
    if (window.pageYOffset > (window.innerHeight/2)) {
        util.addClass(totop, "uk-active");
    } else {
        util.removeClass(totop, "uk-active");
    }
}, false);


/* document.addEventListener('DOMContentLoaded', (event) => {
    const dropBtn = document.querySelector('.drop-btn');
    const hiddenDropBtn = document.querySelector('.hidden-drop-btn');

    hiddenDropBtn.addEventListener('mouseover', function() {
        dropBtn.classList.add('transform');
        console.log('Class added');
    });

    hiddenDropBtn.addEventListener('mouseout', function() {
        dropBtn.classList.remove('transform');
        console.log('Class removed');
    });
}); */


/* const video = document.getElementById("banner-video");
const circlePlayButton = document.getElementById("play-button");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;



}); */






/* play lottie on scrolling */


/* LottieInteractivity.create({
player:'#scrolling-lottie',
mode:"scroll",
    actions: [
    {
        visibility:[0, 1.0],
        type: "seek",
        frames: [0, 300],
    },
    ]
}); */

/* let player = document.getElementById("scrolling-lottie");

player.addEventListener("ready", () => {
  LottieInteractivity.create({
        mode:"scroll",
        player: "#scrolling-lottie",
        actions: [
        {
            visibility:[1, 1],
            type: "seek",
            frames: [0, 60],
        },
        ]
      });
}); */
/* 
let player = document.getElementById("scrolling-lottie");

player.addEventListener("ready", () => {
  LottieInteractivity.create({
        mode:"scroll",
        player: "#scrolling-lottie",
        container: "#scroll-lottie-container",
        actions: [
        {
            visibility:[0, 1.0],
            type: "seek",
            frames: [0, 50],
        },
        ]
      });
});
 */

/* let player = document.getElementById("play-when-visible");

player.addEventListener("ready", () => {
let inte = LottieInteractivity.create({
    player: "#play-when-visible",
    mode:"scroll",
    actions: [
        {
        visibility: [0.50, 1.0],
        type: "play"
        }
    ]
});
}); */

/* -------------------------------------------- */






/* let player = document.getElementById("play-when-visible");

player.addEventListener("ready", () => {
  LottieInteractivity.create({
			  mode:"scroll",
			  player: "#play-when-visible",
			  actions: [
        {
            visibility:[0, 2.0],
            type: "seek",
            frames: [0, 60],
        },
        ]
			});
}); */
/* --------------------------------------------------- */




/* let player = document.getElementById("scrolling-lottie");

player.addEventListener("ready", () => {
  let inte = LottieInteractivity.create({
    player: "#scrolling-lottie",
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.8], // Adjust visibility range as needed
        type: "playOnce"
      }
    ]
  });
}); */
var rellax = new Rellax('.rellax');




