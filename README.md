# Landing Page Project

*** Dear Reviewer: *** I have changed the menu bar so that each chapter has a different colored button which corresponds to the color of the chapter. You know where you are by matching the colors. Even if you are manually scrolling, the color underneath the nav bar will always indicate which chapter you are on.


This project consists of a main body of chapter sections and a top navigation menu. You can see which item in the navigation menu is active, by hovering over the item in the menu, because the text of the active button changes to Red.

Clicking on any of the active menu items will take you to the beginning of that chapter. Scrolling through the chapters can be done independent of the navigation bar or selection of active menu items. Also it is web responsive across a number of platforms. 

Here is more detail on how the program functions.

To Load the menu when the web page is first displayed 
      First, create a div with class 'navbar'
      Second, create child div's for each of the buttons 
      Now write out all the divs to the body 
      Third use Event Delegation to assign one event listener 
      to the parent element 
            Here we read the Event Object to determine which 
            child div was clicked on 
            Now pass the information to functions outside of the initial load

A single function controls the process of scrolling to the individual chapters
      To do this we need to,
            Compute height of each section 
            Compute the height of navbar section
            Compute the height of section want to scroll to 
            Compute the distance from the given section to bottom of the navbar

Then I have a section that does the actual scrolling ----------
       Here we scroll up or down at a rate of 10 pixels/10 milliseconds. 
       Do this until we are within a fraction of one pixel of the Exact 
       border of each section. To finish out the scrolling of this fraction, 
       we subtract the fractional distance from the number 1 which 
       gives us the exact distance needed to reach the border between
       each section. 
       Are we greater than one pixel from our final destination?
       If yes, execute Group A, otherwise execute Group B 
           Group A: Here we scroll down 
               Repeat until we are less than one pixel from destination 
           Group B: Here we scroll the final fractional distance to finish 
           the scroll
           Once we reach this point, we need to recompute the distance
           based on what section we are scrolling to 

=======================================================================







 


