 DOCUMENTATION:

COLOR LABELS:
    FINISHED TASK = <!-- ** -->
    TODO = <!-- TODO -->
    BUG/ERROR/ ENCOUNTERED= <!-- ! (Indicate the cause of error) -->
    WAY OF FIXES/SOLVE THE ERROR = <!-- ? (Indicate the solution how error/bug solved) -->

March 30, 2025

<!-- **TASK FINISHED:
    *Login/Signup page
    *Customer page (partially)
    *Google OAuth-->

<!-- TODOS in Login/Signup page -->
    <!-- TODO: Feedback handling modal messages-->

<!-- !FIXES in Login/Signup page -->
    <!-- ! Fix layout medyo masikip tignan -->
    <!-- ! Visual bug sa button wherein nag duduplicate yung button ng google auth -->

<!-- TODOS in Customer UI -->
    <!-- TODO: Enhance design of navbar (layout wise lang) -->
    <!-- TODO: Redesign the dropdown logout on navbar -->
    <!-- TODO: Cart UI -->
    <!-- TODO: Reviews Page -->
    <!-- TODO: Shop Page -->
    <!-- TODO: FAQS Page -->
    <!-- TODO: Modal messages/feedbacks -->

<!-- !FIXES in Customer UI -->
    <!-- !Quantity Counter not working -->


March 31, 2025

<!-- **TASK FINISHED: -->
    <!--**FIX: fixed the layout in signup and login page   -->
    <!-- **ADDED: added the registered successfully modal feedback in signup -->
    <!-- **ADDED: added the duplicate email message modal in signup-->
    <!-- **ADDED: added the loading screen both signup and login page -->
    <!-- **FIX: Visual bug sa signup/login via gmail button -->
    <!-- **ADDED: forgot password page -->

    <!-- **FAQs page (partially) -->
    <!-- **FIX: Layout of navbar -->
    <!-- **FIX: Design of dropdown logout -->

<!-- TODOS in Customer UI--> Priority Level(PL): 1 - 5, Level 5 yung most priority
    <!-- TODO: Enhance design of FAQs--> done PL:1
    <!-- TODO: Cart UI --> 
    <!-- TODO: Reviews Page --> 
    <!-- TODO: Shop Page --> 
    <!-- TODO: Modal messages/feedbacks -->
    <!-- TODO: Create a js file (lagay ko mga js ko) --> 

<!-- TODOS in Signup/Login page -->
    <!-- TODO: Implement the loading screen everywhere it is necessarry --> PL: 5
    <!-- TODO: Error messages modals--> PL: 5

<!-- !BUGS/ERRORS -->
<!-- ?FIX METHOD -->
    <!-- !ERROR: Logging in loading screen not appearing after successfully logged in -->
    <!-- ?FIXED BY: adding a callback in the function so that the loading screen will appear before redirecting to other page  -->

    <!-- !ERROR: Registered successfully modal message appearing even the loading screen is not yet done executing-->
    <!-- ?FIXED BY:Rendering the modal message inside the loading screen ==> loadingScreen(modalMessage);   -->

<!-- !FIXES in Customer UI -->
    <!-- !Quantity Counter not working -->

April 01, 2025

<!-- **TASKS FINISHED: -->
    <!-- **Implemented the loading screen in every necessary part of signup and login page -->
    <!-- **Implemented the success and error messages in signup and login page -->

    <!-- **FAQs page -->

<!-- !BUGS/ERRORS -->
<!-- ?FIX METHOD -->
    <!-- !BUG: startup animation of the modals randomly appearing in some of the clicks -->

    <!-- !ERROR: the Ok button in the pass error modal is not triggering the close function -->
    <!-- ?FIXED BY: renaming the id of the ok button in the pass error modal (duplicate name don't work i guess) -->

    <!-- !ERROR: failing to sign in with google after I implemented the email dup modal in the google oauth block -->
    <!-- ?FIXED BY: transferring the modal variables outside the signupForm function so that it can be accessed everywhere in the code since i first implemented the modals inside the signupForm function-->

    <!-- !ERROR: loading screen disappearing right away in google auth logging in -->
    <!-- ?FIXED BY: inserting the redirection into the openLoading() function since the reason why the loading screen disappearing right away is that the redirection executes immediately after calling the openLoadin() function -->

<!-- !FIXES in Customer UI -->
    <!-- !Quantity Counter not working -->

April 02, 2025
<!-- **TASKS FINISHED: -->
    <!-- ** Fix: Layout of FAQs -->
    <!-- **Redesigned the UI of explore enterprise section -->
    <!-- **Added a footer section -->
    <!-- **Added the image that liset edited for the signup and login page -->



April 03, 2025

<!-- **TASK FINISHED: -->
    <!-- **Fixed the design of footer -->
    <!-- **Enhanced the hero-section design -->
    <!-- **Made the quantity counter work -->
    <!-- **PUTANGINANG CART YAN -->

    <!-- ** Enterprise Shop page -->

<!-- !BUGS/ERROR -->
    <!-- !BUG: Loading screen appearing every refresh of the page instead of after clicking the ok button in logout modal. -->
    <!-- ?FIXED BY: Inserting the removal of user session and redirecting to login page inside the openloading() function so that the loading will be executed first before anything else -->

April 04, 2025



April 05, 2025

<!-- **TASK FINISHED: -->
    <!-- **Fixed the design on the cart container -->
    <!-- **Added the count indicator in the cart icon -->
    <!-- **Implemented the success message in add to cart button -->

    <!-- **Review Section -->

<!-- !BUGS/ERRORS -->
    <!-- !BUG: The "Add to cart" button function in opening the modal only works the first item, not in every item even though I already added the ids in every item-->
    <!-- ?FIXED BY: using the class name instead of id since id is not advisable for multiple similar buttons, then looping through the button so that every button will get the same function -->

    <!-- !VISUAL BUG: The okay button in the modal disappearing last -->
    <!-- ?FIXED BY: fixing the transition in the css since its causing the delay of the okay button -->

April 06, 2025
<!-- TODOS: --> Priority Level(PL): 1 - 5, Level 5 yung most priority

<!-- TODO: Customer UI -->
    <!-- TODO: Improve checkout page design --> PL: 4
    <!-- TODO: Explore Enterprise Page --> PL: 4
    <!-- TODO: Preloader --> PL: 2


<!-- **TASK FINISHED: -->
    <!-- **Preloader in every pages -->
    <!-- **Enterprise Page -->

April 07, 2025

April 08, 2025

April 09, 2025

April 10, 2025

<!-- **TASK FINISHED -->
    <!-- **Created the default landing page and made sure it will suggest the guest user does not have complete access -->
    <!-- **Added the not available effect in products -->


April 11, 2025

April 12, 2025
April 13, 2025

<!-- **TASK FINISHED -->
    <!-- **Mobile responsiveness of signup and login page -->
    <!-- **Mobile responsiveness of customer page -->
    <!-- **Mobile responsiveness of customer shop -->
    <!-- **Mobile responsiveness of faqs -->
    <!-- **Entreprise - Product page (partially) -->

April 14, 2025

April 15, 2025 

<!-- **TASK FINISHED -->
    <!-- **Mobile responsiveness in customer page ui -->
    <!-- **Entreprise - Product page (add and edit form)-->

<!-- !BUGS/ERRORS -->
    <!-- !ERROR Di responsive yung components sa Enterprise - Product page -->
    <!-- ?FIXED BY: checking the structure of html codes after adjusting the components and implement the width:100% to the main-content div container-->

April 16, 2025

April 17, 2025

<!-- **TASK FINISHED -->
    <!-- **Enterprise - Notification Page  -->

April 18, 2025

<!-- **TASK FINISHED -->
    <!-- **Enterprise - Account Page -->

April 19, 2025

<!-- TODOS: --> Priority Level(PL): 1 - 5, Level 5 yung most priority
    <!-- TODO:Enhance design of Enterprise Page --> PL: 4
    <!-- TODO: Improve checkout page design --> PL: 5
    <!-- TODO: Overall mobile responsiveness of the design --> 2
    <!-- TODO: Enterprise Dashboard--> PL: 4
    <!-- TODO: Enterprise Community--> PL: 3