# weather-journal-app

## table of contents

- project description
- technologies and how to run the project
  - setup environment
  - local server created
  - APP API Endpoint
  - GET Route I: Server Side
  - GET Route II: Client Side
  - POST Route
  - Dynamically Update UI
- credits
- author name

## project description

asynchronous web app that uses Web API (open weather map)and user data to dynamically update the UI for a Weather-Journal App.

## technologies and how to run the project

### setup environment

first installing express,body-parser,cors from command line is a must

### local server 

local server created on port 8000 and listend to using .listen() function that takes two arguments port and a callback function(serverRunning) to indicate whether server running or not and which port it's running on

### APP API Endpoint

there is a JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.

### GET Route I: Server Side

There is a GET route setup on the server side with the first argument as a string naming the route('/gettdata'), and the second argument a callback function to return the projectData object created at the top of server code


### GET Route II: Client Side

There is an asynchronous function (updateTheUi) to fetch the data from the app endpoint

### POST Route
we're able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function we post data user enters on web app (his feeling) and data we get from api (temperature) and today's date to server side with help of JSON.stringify(data) then at server side we save these information in object called newData

### Dynamically Update UI
i Added a click event listener to an existing HTML button with generate id from DOM using Vanilla JS when clicked whole preocee begins of getting api data and user entered data and posting them to server side then retrieve it back to dispay it at ui

## credits 

this project depended on packages like body-parser,cors and express to be installed and knowledge of vanilla javascript and Creatinf API credentials on OpenWeatherMap.com

## authors's name 

Sherin Reda Mohammed Ahmed Morsy
