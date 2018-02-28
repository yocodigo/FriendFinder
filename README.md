# FriendFinder

This app will determine who, from a pool of user profiles, is a friend match based on your responses. There are a series of 10 statements you will evaluate by making a selection from a scale of one to five, one being you strongly disagree with the statement and five you strongly agree with the statement. Based on your responses, the algorithm will calculate the scores tallied from each user and determine who's scores most closely resemble yours.

## Packages Required
Express server will need the following packages:
* Express: Fast, unopinionated, minimalist web framework for node. Link: https://www.npmjs.com/package/express
* Body Parser: Parse incoming request bodies in a middleware before your handlers, available under the req.body property. Link for more information: https://www.npmjs.com/package/body-parser
* Path: This is an exact copy of the NodeJS ’path’ module published to the NPM registry. Link: https://www.npmjs.com/package/path

## Deployement
```
https://sheltered-ridge-54942.herokuapp.com/
```

### Installing
from your terminal:
* git clone git@github.com:yocodigo/FriendFinder.git
* cd FriendFinder
* npm install
 
## Run the Application 
locally and access it in your browser, first set the PORT environment variable to the value of your choice. An example is shown below.

export PORT=3030
After the PORT environment variable has been set, run the Node.js application with the command below.

node server.js
The application will now be running locally on PORT, in this case that is port 3030. You can then access it locally from your browser at the URL localhost:PORT, in this case localhost:3030.


### Styling
```
Bootstrap 3.3.6
CDN: https://getbootstrap.com/docs/3.3/getting-started/
```

