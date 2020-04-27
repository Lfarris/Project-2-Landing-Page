// *********************************************** // 
// Here we have the external JavaScript statements //
// *********************************************** //

// Dear Reviewer: I have changed the menu bar so that 
// each chapter has a different colored button which 
// corresponds to the color of the chapter. You know 
// where you are by matching the colors. Even if you 
// are manually scrolling, the color underneath the 
//nav bar will always indicate which chapter you are on.


// Load the menu when the web page is first displayed 
window.onload = function() {

    // First, create a div with class 'navbar'
    var newNavBar = document.createElement('div');
    newNavBar.className = 'navbar';

    // Second, create child div's for each of the buttons 
    for (var i = 1; i < 5; i++) {
        var innerDiv = document.createElement('div');
        innerDiv.className = 'menuOption' + i;
        var newText = document.createTextNode('Chapter ' + i);
        innerDiv.appendChild(newText);
        newNavBar.appendChild(innerDiv);

    } // goes with for loop 

    // Now write out all the divs to the body 
    var position = document.getElementsByTagName("body")[0];
    position.insertBefore(newNavBar, position.childNodes[0]);

    // Third use Event Delegation to assign one event listener 
    // to the parent element 
    var el = document.getElementsByClassName("navbar");
    el[0].addEventListener('click', function(eventObj) {

        // Here we read the Event Object to determine which 
        // child div was clicked on 
        var myCurrentElem = eventObj.target.className;

        // An example of what myCurrentElem might be is 'menuOption1'
        // so we pull i from the last character using a substring stmt. 
        // and build the section titles 
        var i = myCurrentElem.substring(10, 11);
        var myTitle = "section" + i;

        // Now pass the information to functions outside of window onload 
        menuscroll(myTitle, i);

    }); // goes with addEventListener 

}; // goes with window.onload 

// --- Declare Global variables which allows us to access inside and outside of functions
var currentChapter = 0;
var currentScrollPt = 0;
var delayScroll = 0;

// --- Begin of Actions to take -----------

// This action is to Scroll to Chapter sctnos
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