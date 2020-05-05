# Landing Page Project

*** Dear Reviewer: *** My last submission had one error which said,  
"It should be clear which section is being viewed while scrolling through the page." 
 Also there was an additional comment of, 
"Your sections and nav links don't have active states."

I don't find the coding difficult for this project but I am uncertain as to what you want.
Here is my latest attempt. If this does not fulfill the requirements for this project you 
will need to give me more detail as to why. 

I have added code such that 
(1) if you hover over the nav bar buttons they will
change color to let you know which button you are on
 
(2) if you click a navbar button the JS code will add
the class name 'active' to the html code of that 
one button and style the button to it's individual color 
based on the class name 'active' until you click 
another button. 
At which time it will remove the class name 'active' 
from the current button which will reset the styling of that
button and place the class name 'active' on the most recent 
button you clicked and style that button. In this way the
nav bar will always show the last button you clicked. 
 
(3) when the screen scrolls, whether it be because you
clicked a button, or, because you manually scrolled,
The JS code will add the class name 'active_section' 
to the html code of the section which is touching the bottom 
of the nav bar and style that section by adding wavy 
underlines to only that one section. 
Once that section has scrolled past the bottom of the 
nav bar, whether it be scrolling upward or scrolling downward,
the JS code will remove the class name 'active_section' from 
the html code of that one section which will remove the styling 
and then place it on the current section that is touching 
the bottom of the nav bar, which adds the wavy underlines to 
the new section. In this way, once scrolling begins,
one section will always display the wavy underlines indicating 
it is the current section you are viewing.

To determine which section is touching the bottom of the 
nav bar, I compute, during the scrolling process, the distance
from the top of each section to the bottom of the nav bar 
A positive or negative value indicates to me which section the
bottom of the nav bar is touching. 

More specific details on how the program functions can be found 
in the comments for the code.

=======================================================================







 


