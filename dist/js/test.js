document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('[uk-slider]');
    const sliderWidth = slider.offsetWidth;
    const slideDuration = 1000; // Adjust the animation duration as needed (in milliseconds)
    let isMouseOverSlider = false;

// slider.addEventListener('mouseenter', function (e) {
//     isMouseOverSlider = true;
//     document.body.style.overflow = "hidden";
// });
//
// slider.addEventListener('mouseleave', function () {
//     isMouseOverSlider = false;
//     document.body.style.overflow = "auto";
// });

    window.addEventListener('wheel', function (e) {
        if (isMouseOverSlider) {
            e.preventDefault(); // Prevent default page scrolling

            if (e.deltaY >   0) {
                UIkit.slider(slider).show('next', { animation: slideDuration });
            } else {
                UIkit.slider(slider).show('previous', { animation: slideDuration });
            }
        }
    });
});



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
 * -------------------------------------------------- */
const currentYear = new Date().getFullYear();
let util = UIkit.util;
let totop = util.$("#totop");

document.addEventListener("DOMContentLoaded", InitializePage);

function InitializePage () {
    
    if (!sessionStorage.getItem('visited')) {
        // Show the first loader
        showLoader('firstLoader');
        console.log("load calll 2");
        // Set the 'visited' flag in sessionStorage
        sessionStorage.setItem('visited', true);
    
        console.log("load calll 3");
    } else {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        // Array of loader IDs
        var loaderIds = ["loader-to-right", "loader-to-left", "loader-to-bottom", "loader-to-top"];
    
        // Function to show a random loader
        function showRandomLoader() {
            // Hide all loaders
            loaderIds.forEach(function(loaderId) {
                document.getElementById(loaderId).style.display = 'none';
            });
    
            // Get a random index
            var randomIndex = getRandomInt(0, loaderIds.length - 1);
    
            // Show the loader at the random index
            document.getElementById(loaderIds[randomIndex]).style.display = 'block';
        }
    
        // Call the function when the page loads
        window.onload = showRandomLoader;
    }

    [].forEach.call(document.querySelectorAll('.current-year'), function (el) {
        el.textContent = currentYear;
    });
    document.body.classList.add('page-loaded');
}
function showLoader(loaderId) {
    // Hide all loaders
    hideLoaders();

    // Show the specified loader
    document.getElementById(loaderId).style.display = 'block';
}

function hideLoaders() {
    // Hide all loaders
    var loaders = document.querySelectorAll('.loader');
    loaders.forEach(function(loader) {
        loader.style.display = 'none';
    });
}
/* --------------------------------------------- */


window.addEventListener('load', () => {
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



document.addEventListener("DOMContentLoaded", function () {
    // Get all video elements with the "playOnHover" class
    const videos = document.querySelectorAll(".playOnHover");

    // Iterate through the video elements and attach event listeners
    videos.forEach((video) => {
        video.addEventListener("mouseover", function (e) {
            video.play();
        });

        video.addEventListener("mouseout", function (e) {
            video.pause();
        });
    });
});





/* --------------------------------------------------------- nav scroll */



//const nav = document.querySelector('nav');
const banner = document.querySelector('#banner');
//const siteHeader = document.querySelector(".site-header");
const programPage = document?.getElementById('program-page');

let isNavHidden = false;
let lastScrollPosition = 0;
        const scrollThreshold = -120;

        window.onload = () => {
            console.log(window.screen.width, 'screen width');
            if(programPage && window.screen.width > 1024) {
                window.scroll({
                    top: 220, behavior: "smooth"
                });
            }
            window.addEventListener('scroll', () => {
                
                let currentScrollPosition = window.scrollY;
//                let scrollAmount = currentScrollPosition - lastScrollPosition;

//                if (scrollAmount < scrollThreshold || currentScrollPosition==0 )  {
//                    siteHeader.classList.remove("hidden");
//                }
//                    else if(currentScrollPosition > lastScrollPosition) {
//                    siteHeader.classList.add("hidden");
//                    
//                }
                lastScrollPosition = currentScrollPosition;
            });
           
        }
/* ---------------------------------------------------------- */

/* ----------------------------------------- */

/* "#b5a991", "#03642c", "#4540de", "#ff3348", "#fdaea1", "#f378fa", "#ed5909", "#ffa30b" */
/* const specificColors = [ "#4440D6", "#EB484F" ,"#F1B1A4", "#F2A73D"]; */


// Function to generate a random color from an array of colors
function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Define your array of 8 different colors
const colors = ["#b5a991", "#03642c", "#4540de", "#ff3348", "#fdaea1", "#f378fa", "#ed5909", "#ffa30b"];
const specificColors = [ "#4440D6", "#EB484F" ,"#F1B1A4", "#F2A73D"];
// Get all the div elements inside the main tag
const divs = document.querySelectorAll(".site-main .border");

// Function to get a set of unique random colors
function getUniqueRandomColors(colors, numColors) {
    const uniqueColors = new Set();
    while (uniqueColors.size < numColors) {
        uniqueColors.add(getRandomColor(colors));
    }
    return Array.from(uniqueColors);
}

// Function to set random colors for the divs
function setRandomColors() {
    // Get a set of unique random colors
    const uniqueColors = getUniqueRandomColors(colors, divs.length);

    // Set the background color of each div to unique random colors
    divs.forEach((div, index) => {
        div.style.backgroundColor = uniqueColors[index];
    });
}

// Call the function to set random colors when the page loads
// setRandomColors();

// Add a click event listener to change border colors
divs.forEach((div) => {
    div.addEventListener("click", () => {
        setRandomColors();
    });
});

// Add a mouseover event listener to change border colors on hover
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        setRandomColors();
    });
});


/* ----------------------------------------- */




/* ``````````````````````````````````````````````````````` */
function rotateIcon() {
    var icon = document.getElementById('menu-toggler');
    icon.style.transform = icon.style.transform === 'rotate(315deg)' ? 'rotate(0deg)' : 'rotate(315deg)';
  }


  // Wait for the DOM to be ready
  document.addEventListener("DOMContentLoaded", function () {
    // Get references to the offcanvas and icon elements
    var offcanvas = document.getElementById("cover-menu");
    var toggleIcon = document.getElementById("menu-toggler");

    // Function to check if the offcanvas is open and update the icon class
    function updateIconClass() {
      if (offcanvas.classList.contains("uk-open")) {
        // Offcanvas is open, add the class to the icon
        toggleIcon.classList.add("z-index10");
        /* setTimeout(function () {
            toggleIcon.classList.remove("z-index10");
          }, 3000); */
      } else {
        // Offcanvas is not open, remove the class from the icon
        setTimeout(()=>{
            toggleIcon.classList.remove("z-index10");
        }, 400)
    
      }
    }

    // Initial check when the page loads
    updateIconClass();

    // Listen for the offcanvas toggle event and update the icon class accordingly
    offcanvas.addEventListener("toggle", updateIconClass);
  });
/* --------------------------------------------------------- */
/* slider slide right and left */

//const slider = document?.querySelector(".uk-slider");
//
//if(slider){
//    document.addEventListener('DOMContentLoaded', function () {
//       
//       const slideDuration = 1000;
//       let isMouseOverSlider = false;
//    
//       slider.addEventListener('mouseenter', function (e) {
//           isMouseOverSlider = true;
//           e.preventDefault();
//           window.document.body.scrollTop(0);
//           console.log('museenter')
//       });
//    
//       slider.addEventListener('mouseleave', function () {
//           isMouseOverSlider = false;
//       });
//    
//       window.addEventListener('wheel', function (e) {
//           if (isMouseOverSlider) {
//               e.preventDefault(); 
//    
//               if (e.deltaY >   0) {
//                   UIkit.slider(slider).show('next', { animation: slideDuration });
//               } else {
//                   UIkit.slider(slider).show('previous', { animation: slideDuration });
//               }
//           }
//       });
//    });
//}

const slider = document?.querySelector(".uk-slider");

if (slider) {
    document.addEventListener('DOMContentLoaded', function () {
        const slideDuration = 50000; // Adjust the value to your preferred duration in milliseconds
        let isMouseOverSlider = false;

        slider.addEventListener('mouseenter', function (e) {
            isMouseOverSlider = true;
            e.preventDefault();
            document.body.style.overflow = 'hidden'; // Disable page scroll
            console.log('mouseenter');
        });

        slider.addEventListener('mouseleave', function () {
            isMouseOverSlider = false;
            document.body.style.overflow = ''; // Enable page scroll
        });

        window.addEventListener('wheel', function (e) {
            if (isMouseOverSlider) {
                e.preventDefault();

                if (e.deltaY > 0) {
                    UIkit.slider(slider).show('next', { animation: slideDuration });
                } else {
                    UIkit.slider(slider).show('previous', { animation: slideDuration });
                }
            }
        });
    });
}



//     document.querySelector('.uk-slider').addEventListener('wheel', (event) => {
//         const slider = UIkit.slider('.uk-slider');
//         if (event.deltaY > 0) {
//             slider.show('next');
//         } else {
//             slider.show('previous');
//         }
//     });

/* ----------------------- */

  // Get the current page's filename
  var currentPage = window.location.pathname.split('/').pop();

  // Check if the current page is "contact.html"
  if (currentPage === 'contact.html') {
      // Add a class to the body tag
      document.body.classList.add('contact-page');
  }

/* ------------------------------------------ */


document.addEventListener('mousedown', handleInteraction);
document.addEventListener('mouseover', handleInteraction);
document.addEventListener('keypress', handleInteraction);
document.addEventListener('scroll', handleInteraction);

function handleInteraction(event) {
    // Assuming 'body' is the tag you want to add a class to
    const body = document.body;

    // Add a class to the body tag
    body.classList.add('loader-active');

    // Log the message to the console
    console.log('Interaction occurred. Added class to body.');
}




