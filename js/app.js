// *********************************************** // 
// Here we have the external JavaScript statements //
// *********************************************** //

// Load the menu when the web page is first displayed 
window.onload = function() {

    // First, create a div with class 'navbar'
    var newNavBar = document.createElement('div');
    newNavBar.className = 'navbar';


    // ----- Add menu item 1 to the Nav Bar 
    var innerDiv = document.createElement('div');
    innerDiv.className = 'menuOption1';
    var newText = document.createTextNode('Chapter 1');
    innerDiv.appendChild(newText);
    newNavBar.appendChild(innerDiv);
    // ------ End of menu item 1 


    // ----- Add menu item 2 to the Nav Bar 
    innerDiv = document.createElement('div');
    innerDiv.className = 'menuOption2';
    newText = document.createTextNode('Chapter 2');
    innerDiv.appendChild(newText);
    newNavBar.appendChild(innerDiv);
    // ------ End of menu item 2 


    // ----- Add menu item 3 to the Nav Bar 
    innerDiv = document.createElement('div');
    innerDiv.className = 'menuOption3';
    newText = document.createTextNode('Chapter 3');
    innerDiv.appendChild(newText);
    newNavBar.appendChild(innerDiv);
    // ------ End of menu item 3 


    // ----- Add menu item 4 to the Nav Bar 
    innerDiv = document.createElement('div');
    innerDiv.className = 'menuOption4';
    newText = document.createTextNode('Chapter 4');
    innerDiv.appendChild(newText);
    newNavBar.appendChild(innerDiv);
    // ------ End of menu item 4 


    // Now write out whole data structure to the body 
    var position = document.getElementsByTagName("body")[0];
    position.insertBefore(newNavBar, position.childNodes[0]);


    // Now add action to each of the menu items 
    var menu1 = document.getElementsByClassName("menuOption1");
    menu1[0].addEventListener("click", menu1scroll); // was topfunction

    var menu2 = document.getElementsByClassName("menuOption2");
    menu2[0].addEventListener("click", menu2scroll);

    var menu3 = document.getElementsByClassName("menuOption3");
    menu3[0].addEventListener("click", menu3scroll);

    var menu4 = document.getElementsByClassName("menuOption4");
    menu4[0].addEventListener("click", menu4scroll);

};

// --- Declare Global variables which allows us to access inside and outside of functions
var currentChapter = 0;
var currentScrollPt = 0;
var delayScroll = 0;

// --- Begin of Actions to take -----------
// This action is to Scroll to Chapter 1 
function menu1scroll() {
    currentScrollPt = (needDistanceTo1()) / 10;
    currentChapter = 1;
    point1Scroll();
}

// This action is to Scroll to Chapter 2 
function menu2scroll() {
    currentScrollPt = (needDistanceTo2()) / 10;
    currentChapter = 2;
    point1Scroll();
}

// This action is to Scroll to Chapter 3 
function menu3scroll() {
    currentScrollPt = (needDistanceTo3()) / 10;
    currentChapter = 3;
    point1Scroll();
}

// This action is to Scroll to Chapter 4 
function menu4scroll() {
    currentScrollPt = (needDistanceTo4()) / 10;
    currentChapter = 4;
    point1Scroll();
}
// --- End of Actions to take -------------


// --- Begin of computing current distance needing to scroll 
// --- These distances are not fixed but depend on when the function is called
// --- and at what point the page is scrolled at the time it's called 

// Compute the distance from section 1 to bottom of navbar
function needDistanceTo1() {
    var a = sec1h() - sec0h();
    return a;
}

// Compute the distance from section 2 to bottom of navbar
function needDistanceTo2() {
    var a = sec2h() - sec0h();
    return a;
}

// Compute the distance from section 3 to bottom of navbar
function needDistanceTo3() {
    var a = sec3h() - sec0h();
    return a;
}

// Compute the distance from section 4 to bottom of navbar
function needDistanceTo4() {
    var a = sec4h() - sec0h();
    return a;
}
// --- End of computing current distance needing to scroll 


// --- Begin of Computing height of each section --------------- 
// --- That is, the height as measured along the Y-axis 
// Compute the height of navbar section
function sec0h() {
    var secction0 = document.getElementsByClassName("navbar")[0];
    var secct0 = secction0.getBoundingClientRect();
    return secct0.height;
}

// Compute the height of section 1
function sec1h() {
    var secction1 = document.getElementById('section1');
    var secct1 = secction1.getBoundingClientRect();
    return secct1.y;
}

// Compute the height of section 2
function sec2h() {
    var secction2 = document.getElementById('section2');
    var secct2 = secction2.getBoundingClientRect();
    return secct2.y;
}

// Compute the height of section 3
function sec3h() {
    var secction3 = document.getElementById('section3');
    var secct3 = secction3.getBoundingClientRect();
    return secct3.y;
}

// Compute the height of section 4
function sec4h() {
    var secction4 = document.getElementById('section4');
    var secct4 = secction4.getBoundingClientRect();
    return secct4.y;
}
// --- End of Computing height of each section -----------------


// --- Begin section that does the actual scrolling ----------
// --- Here we scroll up or down at a rate of 10 pixels/10 milliseconds. 
// --- Do this until we are within a fraction of one pixel of the Exact 
// --- border of each section. To finish out the scrolling of this fraction, 
// --- we subtract the fractional distance from the number one which 
// --- gives us the exact distance needed to reach the border between
// --- each section. 
function point1Scroll() {
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
        var leapfrog = 'point1Scroll()';
        delayScroll = setTimeout(leapfrog, 10);

        // Group B: Here we scroll the final fractional distance to finish the scroll
        // Once we reach this point, we need to recompute the distance
        // based on what section we are scrolling to 
    } else {
        window.scrollBy(0, needDistanceTo3() + 1);
        switch (currentChapter) {
            case 1:
                window.scrollBy(0, needDistanceTo1() + 1);
                break;
            case 2:
                window.scrollBy(0, needDistanceTo2() + 1);
                break;
            case 3:
                window.scrollBy(0, needDistanceTo3() + 1);
                break;
            case 4:
                window.scrollBy(0, needDistanceTo4() + 1);
                break;
        }
    }
}
// --- End of secton that does the actual scrolling ---------- 