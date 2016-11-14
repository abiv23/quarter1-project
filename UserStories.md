# Moral Scoreboard User Stories
## Project Description
* If you can't beat em, pretend to have moral superiority with 'Moral Scoreboard'

* 'Moral Scoreboard' is a simple web app that searches and returns all arrests for the time period and team specified,
allowing you to effectively discount any teams achievements.

* ex.
fan of talented team: "The Patriots are the best team in the past two decades"

* response from Browns fan: "Aaron Hernandez was convicted of murder in 2013, your success has been sullied by the morals you bent to achieve it, the Browns have murdered exactly zero people in that time period, I prefer a team with class."

# all users stories located here: https://www.pivotaltracker.com/n/projects/1920485

# User Story1 (landing page that takes/stores user input)
* As a user of Moral Scoreboard, I need a page to interact with the NFL arrests API in order to give the api information (see wireframes: https://wireframe.cc/BrH3pr)

# User Story2 (subsequent visits should save team name)
* As a user of Moral Scoreboard, I need a user input area that takes favorite team input (in the form of abbreviation, city, or team name the placeholder text will reflect these options) and uses an api call to find the team abbreviation key (ex GET url http://nflarrest.com/api/v1/team/search/?term=seahawks)s

# User Story3 (Input area for user to interact with NFL Arrest API)
* As a user of Moral Scoreboard, I need to display the search results for the first team listed team name in order to receive the players rapsheets from that team (ex GET url http://nflarrest.com/api/v1/team/arrests/cle)

# POTENTIALLY MAKE STRETCH User Story4 (API returned info displayed dynamically)
* As a user of Moral Scoreboard, I need the info returned from the NFL Arrests API to display it's returned data in an easy to read format in order to quickly ascertain what info i'm interested in

## stretch functionality

# PUSH TO NON STRETCH (Sorting against favorite team to surface where the other team commits more crimes than you)
* As a user of Moral Scoreboard I would like to see a breakdown of crime where my rival team has more infractions than my team

# User Story6 (Sorting data returned to surface the most egregious crimes first)
* As a user of Moral Scoreboard i'd like the results of player/team arrest info weighted/organized with the most egregious listed first

# Initial Wireframes
* https://wireframe.cc/BrH3pr (home)
* https://wireframe.cc/6uPXRX (home search results above the fold)
* https://wireframe.cc/s4ynyQ (home search results below the fold)
