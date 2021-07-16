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
    - [MongoDB](#mongodb-database)
    - [Frameworks](#frameworks)
    - [Libraries](#libraries)
4. [Testing](#testing)
5. [Bugs](#bugs)
6. [Deployment](#deployment)
      [Begining](#Creating-this-project)
    - [GitHub](#github-pages)
    - [Heroku](#heroku)
7. [Credits](#credits)

# User Experience

## User Stories

- ### First Time Visitor Goals
    1. As a First Time Visitor, I want to be able to navigate the application with ease and register my account.
    2. As a First Time Visitor, I want to find the list of actors and some basic information about them.

- ### Returning Visitor Goals
    1. As a Returning Visitor, I want to log into my already created account.
    2. As a Returning Visitor, I want to be able search the app for actors.
    3. As a Returning Visitor, I want to be able to add new actors to the data base.

## Design

Since the aim of the site is to find information I decided to keep it as plain and simple as possible.
As the front page displays pictures of my top 3 favourite actors, I have chosen pictures that are in dark colors to match the all grey character of this app.

### Colour

- Colour palette used for this project was taken from [Materialize](https://materializecss.com/color.html).

- Colors used for this project are shades of grey.


### Typography

- [Font](https://fonts.google.com/) Prompt was used throughout the project.

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

- [JQuery](https://jquery.com/)
    - DOM manipulation to initiate the interactive functions from Materialize.

- [Flask](https://flask.palletsprojects.com/en/2.0.x/)
    - framework used for the project.

- [Jinja](https://www.palletsprojects.com/p/jinja/)
    - templating for Python functionalities.

- [Werkzeug](https://www.palletsprojects.com/p/werkzeug/)
    - Web Server Gateway Interface web application library.

- [Heroku](https://www.heroku.com/)
    - to be build/run/operate this app in the cloud.

- [MongoDB](https://www.mongodb.com/)
    - database used for the project.

## Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://pt.wikipedia.org/wiki/JavaScript)
- [Python](https://pt.wikipedia.org/wiki/Python)

## MongoDB Database

### **users collection**

    **Title**|**Key in Collection**|**Data Type**
    :-----:|:-----:|:-----:
    User ID|_id|ObjectId()
    Username|username|String
    Password|password|String

### **actors collection**

    **Title**|**Key in Collection**|**Data Type**
    :-----:|:-----:|:-----:
    Scientist ID|_id|ObjectId()
    Name|name|String
    Country Born|country_born|String
    Date of Birth|dob|String
    Field of Research|field_of_research|String
    Description|description|String
    Nobel Laureate|nobel_laureate|Boolean
    URL|url|String
    Added By|added_by|String
    Created Date|date|Date

[Top](#table-of-content)

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Testing

## General
I have performed a testing of this app and all of its functionalities. Also, all features within this README file were tested.

- The CSS code was tested using [Jigsaw](https://jigsaw.w3.org/css-validator/validator) and produced no errors.

- The HTML code was tested using [W3C Validator](https://validator.w3.org/nu/#textarea) and produced no errors.

- The JavaScript was tested using [Beautify Tools](https://beautifytools.com/javascript-validator.php) and produced some minor errors.

## Testing User Stories

-   ### First Time Visitor Goals
    1. As a first time user I can navigate via the menu to the different pages and register my account on the register page.
    2. As a first time user I can see the site is easy to navigate either via a computer or via a mobile screen by using the navbar and the side navbar.

-   ### Returning Visitor Goals
    1. As a returning user I can have my session cookie saved so I don't need to login back to the site.
    2. As a returning user I can easily check the compendium and see all the scientists added there.
    3. As a returning user I can check the featured scientists and the most recent scientists added by checking the homepage.
    4. As a returning user I can search for my favorite scientists using the search bar.

-   ### Frequent Visitor Goals
    1. As a return user I can either log in to my registered account without needing to register again.
    2. As a return user I can check the Add page to add more scientists to the database.
    3. As a return user I can check each scientist information with more details and then edit the scientists and update their information.
    4. As a return user I can search for a particular scientist and edit that particular scientist and update his information.

## Additional Testing

    All testing performed via the app deployed to Heroku (on compendium-of-scientists.herokuapp.com/home)

-   ### Testing base template (base.html):

    1. When clicking on the Navbar options the correct page link should work.

    2. Tested the mobile sidebar and tested the different page links.

    3. Tested the Flash messages to make sure they were working when the user Log In and displays the "Welcome, user" message.

    4. Tested all the Links on the navbar to make sure they are working fine and are being opened in a new tab.

-   ### Testing Homepage :
    1. Checking the overall responsiveness of the page on different emulated devices and different browsers already specified under the Testing category.
    
    2. When User is Logged In: Checked the "More Details" button under each one of the three "Famous Scientists" sections to make sure the detailed page opens for the correct scientist. 
        1.  When User is Logged Out: Tested to make sure this option is hidden.
    
    3. Tested the "Recent Additions" section to make sure the loop is working and displaying the latest six scientists added to the database. 
        1.  When User is Logged In: Tested the "More Details" option to make sure it was working and displaying. 
        2.   When User is Logged Out: Checked the "More Details" option to make sure it was not displaying.

-   ### Testing Compendium page (compendium.html):
    1. Tested the Search Bar to make sure the "Reset" option works and clean the filtered search.

    2. Tested the "Search" option to make sure it was searching correctly the Scientist Name, Born in field, Field of Research and Nobel Laureate.

    3. Tested the "More Details" option to make sure it was opening the correct scientist detailed page.

-   ### Testing Detailed Scientists page (scientists.html):
    1. Made sure when the "More Details" option is clicked on the scientist that his detailed page with the correct information would load out and display.

    2. Tested that all the Wikipedia links on the scientist detailed page (/scientists/scientist_id) are working and opening the Wikipedia site in a new tab.

    3. Tested the "Delete" option on the scientist detailed page (/scientists/scientist_id) to make sure the scientists are indeed deleted from the database

    4. Tested the "Edit" option on the scientist detailed page (/scientists/scientist_id) to make sure it would redirect to the correct edit_scientist.html page

-   ### Testing Add page (add_scientist.html):
    1. Added several test scientists and checked the database to make sure they were added correctly.

    2. Tested the required option on the fields: Scientist Name, Country of Birth, Date of Birth, Field of Research and Short Description. Also tested the minimum and maximum length required for each field:

-   ### Testing Logout option:
    1. Tested the Flash message that appears when User Logs out: "You have successfully logged out"

    2. Made sure the cookie session is cleared after User Logs out and that the "More Details" option is hidden, as well with the Nav Bar options: "Add" and "Logout"

    3. Tested the redirection to the "Log In Page" after Users logs out.

-   ### Testing Sign Up option:
    1. Tested trying to add a Username that already exists on the database and that it displays the Flash Message "This User already exists"

    2. Tested the only accepted format: Alphanumeric and minimum and maximum length for the "User" field and the "Password" field.

    3. Tested the redirection after User is successfully registered to the Homepage and checked that it shows the correct flash message "Registration Successful!" on the homepage.

    4. Tested required fields for "User" and "Password"

    5. Tested the Link option to redirect to the "Log In" page if the User is already registered.

-   ### Testing Log In option:
    1. Tested the Flash message that appears when User tries to Log In with a wrong User or Password: "Incorrect User and/or Password"

    2. Tested the successful login and the redirection to the homepage and the Flash message that appears: "Welcome, user"

    3. Tested required fields for "User" and "Password"

    4. Tested the Link option to redirect to the Sign Up page if the User is not registered yet.

-   ### Testing edit_scientist.html Page:
    1. Made sure the details for Scientist Name, Country of Birth, Date of Birth, Field of Research, and Wikipedia URL are pre-filled with the current information.

    2. Tested the "Cancel" option to make sure nothing was updated on the database and that the page redirects back to the compendium page.

    3. Tested the "Update" option and made sure the modified scientist details were modified on the database.


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

## Heroku

- To deploy the app using Heroku, go through the following steps:

    1. Use pip3 freeze > `requirements.txt` to create a list of the dependencies.

    2. Create a `Procfile` by running this command on the CLI: `echo web: python app.py > Procfile`

    3. Run `git add .`, `git commit -m`, and `git push`, to push the project files to your GitHub repository.

    4. Navigate to Heroku, log in and create a new app by clicking on the 'New' and 'Create New App'. Enter your app name and select your region and create app.

    5. Under the 'Deploy' tab, select 'GitHub - Connect to GitHub'.
    
    6. Enter your repository's name in the input field, and connect once found.

    7. To set your environment variables navigate to the 'Settings' tab and scroll down to 'reveal config vars'

    8. Add the config vars:

    | Key | Value |
    |:---:|:-----:|
    | IP | 0.0.0.0 |
    | PORT | 5000 |
    | MONGO_DBNAME | `<database_name>` |
    | MONGO_URI | `mongodb+srv://<username>:<password>@cluster0.ar4ah.mongodb.net/<database_name>?retryWrites=true&w=majority` |
    | SECRET_KEY | `<Your secret Key>` |

    9. Navigate to the 'Deploy' tab. To enable automatic deployment, scroll down to the 'Automatic Deploys' section.

    10. Choose your GitHub branch and enable automatic deployment.

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