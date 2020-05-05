// *********************************************** // 
// Here we have the external JavaScript statements //
// *********************************************** //

// Dear Reviewer: My last submission had one error which said,  
// "It should be clear which section is being viewed while 
// scrolling through the page." 
// Also there was an additional comment of, "Your sections and
// nav links don't have active states."
// I don't find the coding difficult for this project but 
// I am uncertain as to what you want. Here is my latest attempt.
// If this does not fulfill the requirements for this project
// you will need to give me more detail as to why. 
//
// I have added code such that 
// (1) if you hover over the nav bar buttons they will
// change color to let you know which button you are on
// 
// (2) if you click a navbar button the JS code will add
// the class name 'active' to the html code of that 
// one button and style the button to it's individual color 
// based on the class name 'active' until you click 
// another button. 
// At which time it will remove the class name 'active' 
// from the current button which will reset the styling of that
// button and place the class name 'active' on the most recent 
// button you clicked and style that button. In this way the
// nav bar will always show the last button you clicked. 
// 
// (3) when the screen scrolls, whether it be because you
// clicked a button, or, because you manually scrolled,
// The JS code will add the class name 'active_section' 
// to the html code of the section which is touching the bottom 
// of the nav bar and style that section by adding wavy 
// underlines to only that one section. 
// Once that section has scrolled past the bottom of the 
// nav bar, whether it be scrolling upward or scrolling downward,
// the JS code will remove the class name 'active_section' from 
// the html code of that one section which will remove the styling 
// and then place it on the current section that is touching 
// the bottom of the nav bar, which adds the wavy underlines to 
// the new section. In this way, once scrolling begins,
// one section will always display the wavy underlines indicating 
// it is the current section you are viewing.
// 
// To determine which section is touching the bottom of the 
// nav bar, I compute, during the scrolling process, the distance
// from the top of each section to the bottom of the nav bar 
// A positive or negative value indicates to me which section the
// bottom of the nav bar is touching. 

// ---------------------------------------------------------------
// MAINLINE 
// ---------------------------------------------------------------
// Load the menu when the web page is first displayed 
window.onload = function() {

        // First, create a div with class 'navbar'
        var newNavBar = document.createElement('div');
        newNavBar.className = 'navbar';

        // Second, create child div's for each of the buttons 
        for (var i = 1; i < 5; i++) {
            var innerDiv = document.createElement('div');
            innerDiv.className = 'menuOption' + i + ' btn';
            if (i == 2) {
                innerDiv.className = 'menuOption' + i + ' btn';
            }
            var newText = document.createTextNode('Chapter ' + i);
            innerDiv.appendChild(newText);
            newNavBar.appendChild(innerDiv);
        } // goes with for loop 

        // Now write out all the divs to the body 
        var position = document.getElementsByTagName("body")[0];
        position.insertBefore(newNavBar, position.childNodes[0]);

        // Third use Closure with IIFE to assign event listerners 
        // to every button 
        var btns = document.getElementsByClassName("btn");
        for (i = 0; i < btns.length; i++) {
            (function(i) {
                btns[i].addEventListener("click", function() {

                    // First, get into loop to read all the buttons 
                    // look for any button that has class name of active
                    // and remove it 
                    for (var j = 0; j < btns.length; j++) {
                        var current = document.getElementsByClassName("active");
                        if (current.length > 0) {
                            current[0].className = current[0].className.replace(" active", "");
                        } // goes with if current.length 
                        // Then assign the class name of 'active' to the button just clicked
                        this.className += " active";
                    } // goes with for loop 

                    // Next call the scrolling function when you click on a button
                    var k = i + 1;
                    var mySectionName = "section" + k;
                    menuscroll(mySectionName, k);

                }); // goes with add Event Listener 

            })(i); // goes with the wrapper function (i) or IIFE 

        } // goes with for loop using i 

    }; // goes with window onload 

// Execute this code whenever we scroll 
window.onscroll = function() {
    menu5scroll();
};

function menu5scroll() {
    // get into loop to go through all the sections and remove 
    // the class name 'active_section' thus resetting all sections
    var y = [];
    var scts = document.getElementsByClassName("main");
    for (var j = 0; j < scts.length; j++) {
        // as you go through each section build an array 
        // of how many sections there are 
        var w = j + 1;
        var ww = "section" + w;
        y[j] = needDistanceTo(secbid(ww));

        // here we actually reset the sections
        var current = document.getElementsByClassName("active_section");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active_section", "");
        } // goes with if (current.length > 0)

    } // goes with for loop 

    // Now we add the class name 'active_section' to the section 
    // which touches the bottom of the nav bar 
    // by counting backward through the array built above 
    scts = document.getElementsByClassName("main");
    for (j = scts.length - 1; j >= 0; j--) {
        if (y[j] < 0) {
            scts[j].className += " active_section";
            break;
        } // goes with if (y[j]) < 0 
    } // goes with the for loop using j 

} // goes with function menuscroll() 

// --- Declare Global variables which allows us to access inside and outside of functions
var currentChapter = 0;
var currentScrollPt = 0;
var delayScroll = 0;

// --- Begin of Actions to take ----------- 

// This action is to Scroll to Chapter sctnos
// Sample data: scttitle -> section1, section2,...  sctnos = 1,2,... 
function menuscroll(scttitle, sctnos) {
    currentScrollPt = (needDistanceTo(secbid(scttitle))) / 10;
    currentChapter = sctnos;
    pointyScroll();
}
// --- End of Actions to take -------------

// --- Begin of computing current distance needing to scroll 
// --- These distances are not fixed but depend on when the function is called
// --- and at what point the page is scrolled at the time it's called 

// Compute the distance from section x to bottom of navbar
function needDistanceTo(secxx) {
    var a = secxx - secbcn("navbar");
    return a;
}
// --- End of computing current distance needing to scroll 

// --- Begin of Computing height of each section --------------- 
// --- That is, the height as measured along the Y-axis 
// Compute the height of navbar section
function secbcn(secNavB) {
    var secction = document.getElementsByClassName(secNavB)[0];
    var secct = secction.getBoundingClientRect();
    return secct.height;
}

// Compute the height of section want to scroll to 
function secbid(secSec) {
    var secction = document.getElementById(secSec);
    var secct = secction.getBoundingClientRect();
    return secct.y;
}
// --- End of Computing height of each section -----------------

// --- Begin section that does the actual scrolling ----------
// --- Here we scroll up or down at a rate of 10 pixels/10 milliseconds. 
// --- Do this until we are within a fraction of one pixel of the Exact 
// --- border of each section. To finish out the scrolling of this fraction, 
// --- we subtract the fractional distance from the number 1 which 
// --- gives us the exact distance needed to reach the border between
// --- each section. 
function pointyScroll() {
    // Are we greater than one pixel from our final destination
    // if yes, execute Group A, otherwise execute Group B 
    if (currentScrollPt > 1 || currentScrollPt < -1) {

        // Group A: Here we scroll down 
        if (currentScrollPt > 0) {
            window.scrollBy(0, 10);
            currentScrollPt -= 1;
            // Here we scroll up     
        } else {
            window.scrollBy(0, -10);
            currentScrollPt += 1;
        }
        // Repeat until we are less than one pixel from destination 
        var leapfrog = 'pointyScroll()';
        delayScroll = setTimeout(leapfrog, 10);

        // Group B: Here we scroll the final fractional distance to finish the scroll
        // Once we reach this point, we need to recompute the distance
        // based on what section we are scrolling to 
    } else {
        var curChap = 'section' + currentChapter;
        window.scrollBy(0, needDistanceTo(secbid(curChap)) + 1);
    }
}
// --- End of secton that does the actual scrolling ----------