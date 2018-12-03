# Red Adventure Project Requirements

### The Challenge
Convert series of PSD files and supporting assets into a fully functional web page
- [ ] Using HTML, CSS, and JavaScript
- [ ] Renders perfectly in all major browsers
- [ ] Interactive and creative as possible

### The Principles and Concepts
- [ ] Web Standards
- [ ] Readability
- [ ] Performance
- [ ] Form Validation
- [ ] Semantic Markup

 
### Technical Guidelines
  * No CSS libraries/frameworks may be used, however, CSS (pre)processors like Sass are encouraged for compiling your own CSS.
  * Any JavaScript frameworks are allowed (We love to see Vanilla solutions too!).
  * The page should be responsive for Mobile, Tablet, and Desktop.
  * Dealers section should be built using the provided JSON file.

### On Completion Checklist
Send finished project via a public link to a Google Drive folder (or another similar service) that contains your finalized assets. The finalized project should follow the following specs:
- [ ] Excludes the node_modules directory (or other similar package manager directories).
- [ ] Should have a distribution folder that can be viewed directly in a browser.
- [ ] Should not require a build process to view the site.

-----------
#### TO DO List:
* Install dev dependencies
* gulp
* sass (used this tutorial http://ryanchristiani.com/getting-started-with-gulp-and-sass/)
* implement vue framework to make the most of built in features for cross browser compatibility

  - installed dev tools for development debugging, but the version built by electron https://github.com/vuejs/vue-devtools/blob/master/shells/electron/README.md
* add a way to access restful service with vue. in this case a static json file

* added normalize.css package for better cross browser compatibility
* make sure to run html and css through validators: https://validator.w3.org/
* and run through http://crossbrowsertesting.com/ or browserstack