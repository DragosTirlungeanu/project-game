# Slide-Puzz

### Game Purpose

Slide-puzz was developt for educational purpuses combined with an interactive approach that will keep players engaged.

This is a straight forward game that displays a picture of 'Connor' from 'Assassins Creed III' sliced into 16 equally sized pictures. For a positive result please check out the features in the pipeline.

Note that this game is designed for players aged 3 and above for healthe and safety purposes.

### Functionality

To start the game 
simply open the HTML file in your web browser

Implementation
The functionality has been implemented using the following features:

Documented
Twitter Bootstrap 3.2, 
Javascript, HTML5
well-structured CSS built with LESS
responsive web development/design (no separate m-dot site)
page content sourced via XHR service call with JSON response (static)
multi-browser unit testing with Jasmine & Karma
grunt-driven builds to dev and prod distributions
Usage
Building
Fork/clone this repo, then:

$ bower install && npm install
# build the dev distribution:
$ grunt dev
# run the unit tests:
$ grunt test
# just build the docs
$ grunt docs
# build the prod distribution (includes clean, test & docs) :
$ grunt prod
Running
Set up local web servers to point to dist/dev and dist/prod for dev and prod distributions, respectively.

Customising
To customise the content, modify the contents of the following files:

svc/*/*.json
src/js/app/*/*/*.html
Viewing the docs
Build the docs, fire up a web server with dist/docs as the webroot, and point your browser to localhost:8001:

$ ( grunt docs && cd dist/docs && python -m SimpleHTTPServer 8001 )
Issues
The github issue system holds the issues for this project:

all
bugs
enhancements
investigate
Demo site
mcalthrop.github.io/angular-spa-demo/

This site is kept up to date with the latest code in the codebase.