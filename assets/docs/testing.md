# Testing

Back to [README.md](../../README.md).

## Table Of Contents
- [Code Validation](#code-validation)
- [Browser Testing](#browser-testing)
    - [Mobile Browser Testing](#mobile-browser-testing)
- [Responsive Testing](#responsive-testing)
- [Lighthouse Results](#lighthouse-test-results)
- [Functional Testing](#functional-testing)
- [UX Goal Alignment](#ux-goal-alignment)
- [Bug Tracker](#bug-tracker)
    - [Open Bugs](#open-bugs)
    - [Resolved Bugs](#resolved-bugs)
    - [Other Issues](#other-issues)

### Code Validation

Each page produced by myself has been ran through W3C HTML & CSS Checkers and found no errors. Javascript was put through JSHint and
       
| Language | URLS | Evidence |
| -------- | -------- | -------- |
| HTML     | Deployed Site Results W3C | [W3C HTML Validation PDF](w3chtmlvalid.pdf "W3C Valid HTML PDF") |
| CSS      | Deployed Site Results W3C | [W3C CSS Validation PDF](w3cvalidcss.pdf "W3C Valid CSS PDF") |
| JS       |  <img src="images/jshint.jpg"> |

### Browser Testing

I manually tested the browsers below performing the same actions such as:- 
- Manually resizing each browser window and looking for any unexpected changes at specific breakpoints(320px , 768px and 1024px)
- Walking through the steps found in the functional testing table to establish any code issues.

| Browser | Responsive All Sizes  | URL to Screenshot | 
| ---- | -------- | ------------------|
| Opera|  PASS    |<img src="images/opera_desktop.png" height="200px">        | [Opera Screenshot](images/opera_desktop.png "Opera Desktop") |
| Edge |   PASS    |<img src="images/microsoft_edge.png" height="200px">          | [Edge Screenshot](images/microsoft_edge.png "Edge Desktop") |
| Firefox Developer | PASS  | <img src="images/firefox_developer.png" height="200px">         | [Firefox Screenshot](images/firefox_developer.png "Firefox Desktop") |
| Chrome   | PASS    | <img src="images/google_chrome.png" height="200px">      |       [Chrome Screenshot](images/google_chrome.png "Chrome Desktop") |
| Combination of Browsers |PASS| <img src="images/opera_edge_chrome_ffdev.png" height="200px">      |       [Combination of Browsers](images/opera_edge_chrome_ffdev.png "Opera, Edge, FF Dev, Chrome Screenshot") |

### Mobile Browser Testing

The site was tested on my personal Samsung Galaxy A72 and appeared to show no problems. Again, I played the game as a user would and got my family to play the game. 

<img src="images/galaxya72_answers.png" height="300px">
<img src="images/galaxya72_game_buttons.png" height="300px">
<img src="images/galaxya72_instructions.png" height="300px">
<img src="images/galaxya72_scores.png" height="300px">

Other than what is detailed in the [Bug Tracker](#bug-tracker) there was no additional issues.

### Responsive Testing

In the below table, I have added screenshots of each resolution, at each point in the game. There was no artifacts or bugs that were detected visually or via DevTools. I resized the window to the most common breakpoints to test if the site was truely responsive.

| Device   | Landing Page                                      | Quiz Page                                          | Scores Page                                        | Comments |
| -------- | ------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------- |
| Mobile   | ![Landing Page for Mobile](./images//landing_mobile.jpg)| ![Landing Page for Mobile](./images//quiz_mobile.jpg) | ![Scores Page for Mobile](./images/scores_mobile.jpg)                   |Each page displays as it should with no visible artifacts or issues. These were all tested at a resolution of 320px and above.          |
| Tablet   | ![Landing Page for Tablet](./images/landing_tablet.jpg)     | ![Quiz Page for Tablet](./images/quiz_tablet.jpg)           | ![Scores Page for Tablet](./images/scores_tablet.jpg)       |Each page displays as it should with no visible artifacts or issues. These were all tested at a resolution of 768px and above.          |
| Desktop  | ![Landing Page for Desktop](./images/landing_desktop.jpg)   | ![Quiz Page for Desktop](./images/quiz_desktop.jpg)         | ![Scores Page for Desktop](./images/scores_desktop.jpg)     |Each page displays as it should with no visible artifacts or issues. These were all tested at a resolution of 1024px and above.          |

### Lighthouse Test Results

I identified several areas for improvement on my website using Lighthouse, including:

* Missing aria-labels on social media icon links: I added descriptive labels to provide users who rely on screen readers with information on the function of the buttons.
* Lack of meta description: I added a meta description to improve my website's SEO scores.
* Use of outdated file format: Lighthouse suggested switching to a more next-gen file format instead of jpeg. I converted my image files to webp format using the BIMP plugin for GIMP to batch convert files.

The following is the result of the automated testing conducted in Lighthouse for the Desktop version of the website:
![Lighthouse Desktop Results](./images/lh_test_results_desktop.webp "Lighthouse Test Results")

The following is the result of the automated testing conducted in Lighthouse for the Mobile version of the website:
![Lighthouse Desktop Results](./images/lh_test_results_mobile.webp "Lighthouse Test Results")


### Functional Testing

| Test Case | Description | Test Steps | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- | --- | --- |
| Start Quiz | Does the game start correctly| 1. Click Start Quiz Button <br> 2. JS populates the questions<br>3. User answers the question. <br> 4. Receive interaction feedback | User is able to start the quiz, read the random question displayed and choose an answer. All within a time limit of 30 seconds. | PASS | PASS   |
| Difficulty Toggle | Test Difficulty Toggle | 1. Click Easy Mode Toggle <br> 2. Click Start Quiz <br> | User is successfully able to select a question set. | PASS | PASS   |
| Instructions | Test the modal on the website | 1. Click the Instructions button <br> 2. Close the intructions modal| Instructions Modal shows how instructions on how to play the game. Closes when X is clicked. | PASS | PASS   |
| Picking an Answer | Test if user can select correct answers | 1. Select an answer <br> 2. Receive interaction feedback <br> 3. Repeat process until time runs out <br>  | User is able to select wrong and right answers. User is also able to select multiple answers which is not intended | PASS | FAIL   |
| Reset The Game | Test the reset button on gameHud and scoreboard | 1. Click the reset button <br> 2. Select option to start or change difficulty <br> 3. Start the game again <br>  | User can successfully use the reset button on both gameHud and scoreboard screens.| PASS | PASS|
| Social Media Icons | Test if icons work correctly | 1. Click each icon <br> 2. Verify that they open in new window <br>  | User can successfully go through to social media sites.| PASS | PASS|

### UX Goal Alignment

| First Time Users | Result          |       Evidence |
| ---------------- | --------------- | -------------- |
| I want to play a game where I can test my knowledge. | Ok | The user can select answers to the questions to test their knowledge. |
|I want the app to be visually appealing. |   Ok   | The app is quite eye catching and looks good.      |
|I want to be able to navigate easily. |  Ok    |   User can navigate easily and site is intuitive.    |
|I want to be able to understand how the game works. |  Ok    | User can select the instructions button to read game rules.       |
|I want the game to be accesible on my mobile phone. |  Ok    | Tested with my personal phone, the app works on mobiles.      |



| Returning User | Result          |       Evidence |
| ---------------- | --------------- | -------------- |
| I want the questions to be varied. | Ok          | The questions are randomly chosen |
| I want to be informed when I get an answer wrong, and what the right answer is. | Needs worked          | There is no correct answer flash |
| I want to keep track of my score on each game. | Ok         | There are score counters on either side of the reset game button |
| I want to be able to jump straight in to playing. | Ok     | User can jump in straight away with simple rules and relatively simple quiz design |
| I want to be able to reset the questions.| Ok         | User can reset the game to the main page and start again. |

I don't quite understand how to fit the correct answer flash into the game at the moment but this is something I am going to keep coming back to.

| Frequent User | Result          |       Evidence |
| ---------------- | --------------- | -------------- |
| I want to be able to change the difficulty of the game. | Ok  | User can use the difficulty toggle button to switch|
| I want the game to be timed questions. | Ok   | Timer at the top of the game counts down from 30 seconds |
| I want to be able to view social media for other games/quizzes. | Ok  |       User can select any icon from the footer to view social media sites.|

### Testing Methods Used

- Manual Testing 
    - I relied heavily on manual testing for the majority of my JS. This involved passing variables/functions as arguments to the console.log method.


### Bug Tracker

### Open Bugs
- [ ] Timer element doesn't display as soon as loading into the game.
- [ ] User is able to click more than one answer
- [ ] Clicking in quick successions results in answers skipping.
- [ ] When selecting an incorrect answer, the correct answer should flash.
- [ ] Some of the questions/answers are repeating due to the way they are called.

### Resolved Bugs

- [x] Due to the answer being indexed beyond the actual length of the choices, some responses were being displayed incorrectly and without a valid answer. This was fixed for both easy and hard question sets.

- [x] Originally, the gray overlay I applied to the background only covered the viewport height, which was unintended. As a result, the overlay was modified to extend to 100% of the screen.


### Other Issues

After transitioning from using the Cloud IDE Gitpod to Code Anywhere, I decided to clone my repository to my local device. 

However, I encountered an issue where the global configurations for VSCode on my device were not set up correctly because of a previous(I own) GitHub account that was logged in. This has resulted in the appearance of two contributors to the code, when in reality there was only one. I have acknowledged this in my commits.


