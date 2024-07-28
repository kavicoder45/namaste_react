# Assignment Questions:

## Theory questions:

### what is npm:

- `npm` is a package manager used to manage all dependencies. Additionally, we can configure these dependencies using pacakge.json.

### what is parcel ? and why do we need it ?

- parcel is a bundler. it wrap all our code into single file and give to the browser, it reduce the render time.and also it create a local host with port 1234 and also it has a hmr to dynamically update the element
- To build production ready app.
- This bundling process reduces the number of HTTP requests needed to load your app, which improves performance
- Modern JavaScript (ES6+) and JSX syntax used in React are transpiled into browser-compatible JavaScript. The dist folder contains these transpiled files, ensuring that your app runs on all supported browsers.

### what is tree shaking ?

Tree shaking in Parcel is a technique used to optimize JavaScript bundle sizes by eliminating dead code, which is code that is not actually used in the final application. This process helps improve performance by reducing the amount of JavaScript that needs to be downloaded and executed by the browser.

### what is the use of dist Folder ?

In a React application, the dist (short for "distribution") folder is a crucial part of the build process. It contains the final, optimized output of your application that is ready to be deployed to a web server. Here's a detailed look at the use of the dist folder in a React bundler:
