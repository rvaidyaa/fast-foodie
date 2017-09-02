
# National Park Explorer
Thinkful (https://www.thinkful.com) Final Capstone Project - Full Stack app integrating with National Park Service API

![landing page](https://github.com/Kendallyn/capstone-national-parks-nps/blob/master/public/assets/img/github-readme-img/landingPage.png)

![park search page](https://github.com/Kendallyn/capstone-national-parks-nps/blob/master/public/assets/img/github-readme-img/parkSearchPage.png)

![results section](https://github.com/Kendallyn/capstone-national-parks-nps/blob/master/public/assets/img/github-readme-img/searchResults.png)

![bucket list section](https://github.com/Kendallyn/capstone-national-parks-nps/blob/master/public/assets/img/github-readme-img/bucketListSection.png)

![been there section](https://github.com/Kendallyn/capstone-national-parks-nps/blob/master/public/assets/img/github-readme-img/beenThereSection.png)

## Background

I built this app because I enjoy visiting National Parks and I wanted to have a convenient way to look up National Park information to be able to plan my next visit.

## Use Case
This app gives people a way to search information on the National Parks to find a description, weather information, and directions to that park. The user is able to save the park to a bucket list and they are able to check that park off of their bucket list once they have visited.

## Working Prototype

You can access a working prototype of the app here: https://national-park-explorer.herokuapp.com/

## Functionality
The app's functionality includes:
* Search for National Park information.
* The app returns information such as park description, weather information, directions, and park website.
* Add chosen park to a Bucket List section.
* Update park to visited and save to Been There Done That section.
* Delete parks from Bucket List and Been There Done That sections.

## Technology
<h4>Front End</h4>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>jQuery</li>
<li>React.js</li>
</ul>
<h4>Back End</h4>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>mLab</li>
<li>Mocha + Chai</li>
<li>Travis CI for continuous integration and deployment</li>
</ul>

The app uses AJAX JSON calls to the <a href="developer.NPS.gov">National Park Service</a> Open Platform API to return the national park search results.

## Responsive
App is built to be responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap

This is v1.0 of the app, but future enhancements are expected to include:

* Add a notes section
* Add ability for users to rate parks they have been to
* Integrate in National Monuments in addition to the parks
* Add in links to hotels and campgrounds nearby parks

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node Project ===> npm install
* To install Nodemon globally ===> sudo npm install nodemon --save-dev -g
* To run Node server (serving both Node and React code) ===> nodemon server.js

### Local Mongo DB scripts
* To run tests ===> mongod

### Local React scripts
* To build React ===> npm run build

### Local tests scripts
Note: make sure the nodemon and react server are closed before running this
* To run tests ===> npm run test
