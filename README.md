<h1 align="center">Code Institute Milestone Project 3 - My Favourite Actors</h1>

![Project's Mockup](assets/project/MS3Mockup.JPG)

Click [here](https://lucascegielski.github.io/MS3-Favourite-Actors/) to see live project.

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
    - to test mobile devices responsiveness of my app.

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
    Actor ID|_id|ObjectId()
    Name|full_name|String
    Nationality|nationality|String
    Date of Birth|dob|String
    Favourite Movie|favourite_movie|String
    Academy Award Winner|oscars|Boolean
    Filmography|filmography|String
    Added By|added_by|String
    Created Date|date|Date

[Top](#table-of-content)
# Testing

## General
I have performed a testing of this app and all of its functionalities. Also, all features within this README file were tested.

- The CSS code was tested using [Jigsaw](https://jigsaw.w3.org/css-validator/validator) and produced no errors.

- The HTML code was tested using [W3C Validator](https://validator.w3.org/nu/#textarea) and produced no errors.

- The JavaScript was tested using [Beautify Tools](https://beautifytools.com/javascript-validator.php) and produced some minor errors.

## Testing User Stories

-   ### First Time Visitor Goals
    1. As a First Time Visitor I can navigate via the menu to the available and clearly marked pages, and register my account on the signup page.
    2. As a First Time Visitor I can see the site is easy to navigate either via a computer or via a mobile screen by using the navbar and the side navbar.

-   ### Returning Visitor Goals
    1. As a Returning Visitor I don't need to log back into the site, since I have the cookie session saved.
    2. As a Returning Visitor I can easily search the database for entries.
    3. As a Returning Visitor I can check the actors in the database and edit/delete them.

## Additional Testing

    All testing performed via the app deployed to Heroku (on my-favourite-actors.herokuapp.com/home)

-   ### Base template and home page (base.html and home.html)

    1. When clicking on the logo in the navbar, user is being taken to the home page.
    2. All the links in the navbar take the user into the correct section of the application.
    3. Flash messages are being displayed when user is registering new account/login in/login out/editing the database entries or deleting them.
    4. The images of the top 3 favourite actors are displayed with the Show More button that take user to relevant entries when clicked
    5. The Show More button located at each of the recent entries take user to relevant entry when clicked.
    6. Links in the footer take user to relevant websites when clicked and open in the new tab. 

-   ### Login and Signup page (signup.html and login.html) 
    1. When user is first entering the page, the "Add" and "Logout" button are no visible
    2. When user creates new account, flash message is displayed informing about successful operation.
    3. Flash message is also displayed when user has successfully logged in.
    4. When user is logged in, the option to add entry and to logout become visible.


-   ### Add entry, edit entry and delete entry pages (add_actor.html and edit_actor.html):
    1. User is able to edit existing entry in the database.
    2. User is able to add new entry to the database.
    3. User is able to delete entry from the database.
    4. Each of the above operations triggers the flash message being displayed.
    5. The filmography button takes user to Wikipedia page that displays actor's work and opens in new tab.


-   ### Search entries (search.html):
    1. User is able to search the database using the name of the actor.
    2. The entry displayed upon completion of the search operation, allows user to look into the entry in order to view it, edit it or delete it.

## Further Testing

-   I tested the project using Chrome only. For some reason, when I use Mozilla or Firefox, my laptop is freezing which makes it very difficult to open applications. 

- I asked friend to test the application using the other two mentioned browsers and he reported no issues.

- Friends and family were asked to play with the application and no issues were reported apart from few typos.


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

- Click on dropdown called "None" and select "Master Branch".

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

- As mentioned above, the font and icons were sourced externaly.

- Images used on the homepage were sourced from relevant wikipedia sites.

## Acknowledgements

- My Mentor Aaron, for help, valuable inputs and inspirations.

- [Code Institue's](https://codeinstitute.net/) Tutors, for help on resolving issues.

- My family and friends, for testing and advice.

- [Stackoverflow](https://stackoverflow.com/), Slack and Github communities for feedback and troubleshoot throughout.

- All developers and coders I have followed on [YouTube](https://www.youtube.com/).

[Top](#table-of-content)