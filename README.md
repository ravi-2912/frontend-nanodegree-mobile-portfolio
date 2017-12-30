Website Performance Optimization Project
=
This repository provides optimization techniques for the repository provided by Udacity ([frontend-nanodegree-mobile-portfolio](https://github.com/udacity/frontend-nanodegree-mobile-portfolio "Udacity's FrontEnd Nanodegree Project")). There are two parts to this website as described below:

### Part 1: Optimize PageSpeed Insights score for `index.html`

The objective of this was to optimize the `index.html` webpage for speed and faster rendering. In order to do so the following techniques have been used:

1. Optimize the **Critical Rendering Path**
2. **Code restructuring** and inlining critical CSS.
3. Using **`defer`**, **`async`** and **`media`** attribute key.
4. Delay the load of **non-critical CSS files**.
5. **Minify** the source html, css and js files.
6. Optimize and minify **images**.

#### Result
The updated page was tested with [Google's PageSpeed Insight](https://developers.google.com/speed/pagespeed/insights/ "PageSpeed Insight") the results are amazing.

* Score for Mobile: **91 - 94 %**
* Score for Desktop: **93 - 95 %**

***

### Part 2: Optimize Frames per Second in `pizza.html`
The objetive of this is to optimize the `views/pizza.html` to achieve 60 fps or higher by modifying the `views/js/main.js` file.In order to do so the following techniques have been used:

1. Optimize images for reduced size.
2. Reduce the number of images to be loaded - 32 for moving pizza and 50 for pizza menu items.
3. Minimize layout querries to avoid forced reflow.
4. Globalize layout variables **`pizzaContainer`** for pizza menu items and **`items`** for moving pizza in background. These get updated once DOM is loaded.
5. Decouple the rAF input function **`updatePositions()`** from that delegated to event by creating new function **`onScrol()`**.
6. Using CSS stles **`.large`**, **`.medium`** and **`.small`** to changes pizza sizes by adding and removing these classes.


#### Result
The updated page was checked in console that logs time and the results were amazing.

* Time to generate pizza on load: **Less than 10 ms**
* Time to size pizzas: **Less than 1 ms**
* Average scripting time to generate last 10 frames: **Less than 1 ms**

***
#### Build System
The following are required to build the project.
```
nodejs
grunt
```
#### Installation
If not already intalled then install [`nodejs`](https://nodejs.org/en/download/) and [`grunt`](https://gruntjs.com/getting-started). You can check `npm` installation by following command.
```bash
$> npm -v
```
After installation, navigate to the project folder and type the following command.
```bash
$> cd path/to/project/folder
$> npm install
$> grunt
$> cd dist
```
The above will install build files in **`dist/`** directory.

#### Testing
Testing can be done through deploying the site using **[ngrok](https://ngrok.com/)**. Use the address provided by **[ngrok](https://ngrok.com/)** and test with Google PageSpeed Insight and DevTools of your browser. 

1. Host the `dist/` using [IIS](https://support.microsoft.com/en-gb/help/323972/how-to-set-up-your-first-iis-web-site "Internet Information Services") or server of your choice. Page can be tested by typing `localhost:8080` in browser address bar. If **`python`** is available on your system you can run server as shown below
```bash
$> cd cd path/to/project/folder/dist
$> python -m SimpleHTTPServer 8080 
```
2. Run **[ngrok](https://ngrok.com/)** as shown below
```bash
$> cd path/to/project/folder/dist
$> ngrok http 8080
```
***
#### TODO
* [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html)
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html)


