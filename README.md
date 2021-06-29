<h1 align="center">Code Institute Milestone Project 3 - My Favourite Actors</h1>

![Project's Mockup](assets/project/MS3Mockup.JPG)

Click [here](https://lucascegielski.github.io/MS2-Brands_memory_game/) to see live project.

# My Favourite Actors

Aim of this project is to create a data base of favourite actors, allowing users to share their passion for cinematography.

# Table of Content

1. [User experience](#user-experience)
    - [User Stories](#user-stories)
    - [Design](#design)
    - [Wireframe](#wireframe)
2. [Features](#features)
    - [Existing Features](#existing-features)
3. [Technologies Used](#technologies-used)
    - [Technologies](#technologies)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Libraries](#libraries)
4. [Testing](#testing)
5. [Bugs](#bugs)
6. [Deployment](#deployment)
7. [Credits](#credits)

# User Experience

## User Stories

- ### First Time Visitor Goals
    1. As a First Time Visitor, I want to access the site and find out what it is about.
    2. As a First Time Visitor, I want to be able to navigate the application with ease and register my account.
    3. As a First Time Visitor, I want to find the list of actors and some basic information about them.

- ### Returning Visitor Goals
    1. As a Returning Visitor, I want to log into my already created account.
    2. As a Returning Visitor, I want to be able search the app for actors.
    3. As a Returning Visitor, I want to be able to add new actors to the data base.

## Design

Since the aim of the site is to find information I decided to keep it as plain and simple as possible.
As the front page displays pictures of my top 3 favourite actors, I have chosen pictures that are in dark colors.
I have added some font in gold to make it a little more eye-catchy.

### Colour

- Colour palette used for this project was taken from [Coolors Website](https://coolors.co).

- Main colors used in the project are black (#000000), White (#FFFFFF), Puce (#C2848D), Gainsboro (#E0E0E0) and Gold (#FFD700)

- The selected pallete can be viewed [here](https://coolors.co/ffffff-c2848d-141414-e0e0e0-ffd700)

![Color Palette](documentation/color-palette.JPG)

### Typography

- [Font](https://fonts.google.com/) EB Garamond was used throughout the project.

- [Materialize](https://materializecss.com/icons.html) icons were used throughout the project.

## Wireframe

- Wireframe was developed using [Figma](https://www.figma.com/).

- Files saved from Figma, were converted from .fig into .jpg file with use of [Filestar](https://filestar.com/) application.

- Wireframe of this application can be seen in the documentation folder in this project in .jpg file.

[Top](#table-of-content)
# Features

This single page application allows users to navigate easily between the game and all it's features:

## Existing Features

- **Home** - takes user to the home page of this application.

- **Actors** - allows users to view the data base.

- **Sign Up** - allows new user to register account.

- **Login** - allows user to log into their account.

### Logged in menu
(only seen when user is already logged in)

- **Add** - allows user to add new entries to the data base.

- **Logout** - allows user to log out of their account.

[Top](#table-of-content)
# Technologies Used

## Technologies

- [Figma](https://www.figma.com/)
    - to provide wireframe.

- [Filestar](https://filestar.com/)
    - to convert the wireframe file from .fig to .jpg.

- [Materialize](https://materializecss.com/)
    - to provide icons to the app.

- [Google Fonts](https://fonts.google.com/)
    - to provide free font to the app.

- [Freeformatter](https://www.freeformatter.com/html-formatter.html)
    - to beautify the HTML code.

- [W3C Validator](https://validator.w3.org/nu/#textarea)
    - to validate HTML code.

- [Beautify Tools](https://beautifytools.com/javascript-validator.php)
    - to validate JavaScript code by input.

- [Jigsaw W3C Validator](https://jigsaw.w3.org/css-validator/validator)
    - to validate CSS code by input.

- [Am I responsive](http://ami.responsivedesign.is/#)
    - to test mobile devices responsiveness of my website.

- [Techsini](https://techsini.com/multi-mockup/)
    - to create this project mockup, of which image is placed at the very top of this readme file.
    
[Top](#table-of-content)

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Testing

## General
I have performed thorough testing of this project's website and all of its functionalities. Also, all features within this README file were tested.

- The CSS code was tested using [Jigsaw](https://jigsaw.w3.org/css-validator/validator) and produced no errors.

- The HTML code was tested using [W3C Validator](https://validator.w3.org/nu/#textarea) and produced no errors.

- The JavaScript was tested using [Beautify Tools](https://beautifytools.com/javascript-validator.php) and produced some minor errors.

## Testing User Stories from User Experience (UX) Section

- ### First Time Visitor Goals
    1. As a First Time Visitor, I want to be able to navigate the website with ease.
        - Application is clean, free of extensive functions and in a color-pallete that is easy to read.
        - All the functions are placed in the screen, so that there is no need to unfold or scroll through menu.

    2. As a First Time Visitor, I want to be able to find out how the game works.
        - When entering the website, user is greeted with clear and simple instructions page, where the basics of the game are explained.
        - Last part of the instructions page gives user the ability to control the tune that is playing in the background.
        - Button placed at the bottom of the page allows you to jump into game without any further delays and immediately after reading the instructions.
        - Link to my github repository was placed to simply advertise my work to potential users.

    3. As a First Time Visitor, I want to be able to play the game.
        - The character of the brand icons, the color palette and the tune used were meant to be eye-catchy and pleasant to use.
        - There are no pop-up windows and user is able to jump straight into action without any delays.
        - The Instruction button is located conveniently just above the game screen, for easy access, should user need it.
        - User is able to track their time, score and amount of moves made in real time, thanks to the counters located at teh top of the game window.
        - User is able to control the tune while playing the game.
        - Thanks to Restart button located at the bottom of the page, user can restart the game at anytime. By doing so, user also restarts the counters.

    4. As a First Time Visitor, I want to be able to find out what my score is at the end of the game.
        - The pop-up window will display the final score, time spent in game and amount of moves when the game is finished.
        - In the future development, the said pop-up screen will allow user to invite other people to play the game and will allow the access to the leaderboard.
    
- ### Returning Visitor Goals
    1. As a Returning Visitor, I want to play the game and get better at it.
        - Thanks to the stats run by the application, user can see how they did each time they play.
        - User can come back anytime and play as many time as they want.
        - User can restart the game at any time using the restart button.
    
    2. As a Returning Visitor, I want to be able to beat my own time.
        - The time user has been playing the game is displaying in the real time in MM:SS format.
        - The final time is also displayed in the final pop-up that shows the final stats when the game is finished.

    3. As a Returning Visitor, I want to be able to beat my own score.
        - The current score is displayed during the game for the player to see.
        - The final score is also displayed in the final pop-up that shows the final stats when the game is finished.

    4. As a Returning Visitor, I want to be finish the game in fewer moves.
        - Time is displayed throughout the game with the clock that starts running the moment the user clicks on the first card.
        - The total time the user has been playing is also displayed in the final pop-up that shows the final stats when the game is finished.


## Further Testing
Browsers:

- Project was tested by myself in Chrome browser only. Mozilla and Firefox browsers were crashing my laptop when installed. I tried to fix this issue, but it seems that due to equipment malfunction, I could only test this project in Chrome.

- Testing using Mozilla and Firefox browsers was done by a friend, who said that Mozilla takes longer than Firefox to open the website, and that no other issues were spotted.

Desktop, Tablet & Mobile view:

- Website's responsiveness was tested on mobile devices with a use of:

    - ["Am I responsive"](http://ami.responsivedesign.is/#) facility.

    - Google Chrome DevTools.

- Application was viewed and tested on desktop, laptop, iPad Air, Huawei P30 Lite, and Samsung Galaxy A3.

- Most testing was done to assure the correct layout and the game's functionalities.

- Friends were asked to also test the application for bugs, etc.

Modals:

- Instructions modal opens from the main page by clicking on the **Instructions** button. Modal pops opened each time without a fail.

- Success modal pops open upon completion of the game. Modal opened each time without a fail.

Score Board:

- Timer starts running the moment the first icon is clicked upon.

- Moves counter shows new move each time user clicks the icon.

- Reset function works when clicked upon and resets the counters and the screen, esentially reseting the game.

Readme file:

- Table of contents remains interactive and takes user to correct parts of the file.

- Back-to-top link feature was added at the end of each chapter to allow user to easily navigate the file. 

[Top](#table-of-content)

# Bugs

Most bugs were cleared thanks to all the people and communities mentioned in credits below, and the use of the HTML and CSS validators.

# Deployment

## Creating this project

- I have used the cloud-based IDE [Gitpod](https://gitpod.io/) and [GitHub](http://github.com/) as a free git repository hosting.

- As first step, I have installed the [Gitpod extension](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki) for Chrome browser that I use.

- Next, I created the repository on [Github](https://github.com/) using the gitpod template provided by the [Code Institute](https://github.com/Code-Institute-Org/gitpod-full-template).

- Then, I clicked on "Gitpod" button, which opened workspace in Gitpod, where I created my project.

- Once in Gitpod, the following commands were used while developing this project:
    - "git add (file name)" - to add files for staging.
    - "git status" - to see what is the current status of directory and staging area.
    - "git commit -m "(description of action taken)" - to commit changes along with short comment of what was done.
    - "git push" - to push commits to Github.
    - "python3 -m http.server" - to open ports allowing me to view the current state of the website in Chrome.

## Github pages

- Log in to Github and find the repository.

- At the top of the repository (not in the header of the whole page) find the "Settings" button with a cogwheel icon and click on it.

- Scroll down to "Github Pages" section.

- Click on dropdown called "None" and select "Master Branch" so it looks like in the image below ![screenshot](./documentation/screenshots/githubpages1.jpg)

- Click save next to it and wait for the page to refresh automatically. You will be taken back to the top of the settings page.

- Scroll back down again to "Github Pages" section and find the link of now published page.

## Running project locally

- In order to run this project locally, follow the below steps:

    - Click on the [link](https://github.com/LucasCegielski/MS2-Brands_memory_game) to this project's repository in GitHub (you must be logged into your own Github account).
    - Click on the dropdown menu Code button located next to green "Gitpod" button.
    - Click on "Open with GitHub Desktop" to clone and open the repository locally.
    - Click on the "Choose" option and navigate to the local path where the cloned repository should be located.
    - Click "Clone".

- For more details on how to clone repository in Github see [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

[Top](#table-of-content)
# Credits

## Content

- Apart from [Fontawesome]() icons, no external content was used.

## Acknowledgements

- My Mentor Aaron, for help, valuable inputs and inspirations.

- My kids, Maya & Max for thorough testing.

- [Stackoverflow](https://stackoverflow.com/), Slack and Github communities for feedback and troubleshoot throughout.

- All developers and coders I have followed on [YouTube](https://www.youtube.com/) and especially [RichardCodes](https://www.youtube.com/watch?v=gLWIYk0Sd38&t=42s).

[Top](#table-of-content)