## Q1--what is emmet?
Emmet is toolkit that helps developers to write  large code blocks in seconds by writing some abbreviations.
It is in built installed in vs code and plugins can be downloaded in other code editors.

ex-- div.wrapper typing this will result in 
     
     <div class="wrapper"></div>

## Q2-- Framework Vs Library
Library is a collection of prewritten code(classes and functions) that can be called repeatedly by devlopers at any place of code.

Framework is a structure on which software is built. It provides many APIs, in built libraries, compilres etc to build softwares.Frameworks also contains the design patterns like MVC and according to that design pattern they call our code. 

So the key difference b/w framework and libraries is INVERSION OF CONTROL. In framework control on framework it calls our code but by using library we calls library code in our application code.

## Q3-- what is CDN
CDN is CONTENT DELIVERY NETWORK. It is a N/W of interconnected servers it improves efficiency by introducing intermediate servrers between client and website server.Every server in CDN network is called POP(point of presence). So when ever a user reuest a webpage data first that request goes to the nearest CDN server instead of website server that may be loacted very far from that user this results in reduced server response time .

## Q--4 What is cross-origin 
Feching of data from third party or from the another domain is known as CORS(cross origin resource sharing). if a our website wants a data from the other domain than before the actual data request a PREFLIGHT request is made to that domain by our browser than server will send some preflight response .After this preflight request only we send actual data request.
Preflight request is request to authenticate that cross domain server communication.

## Q5-- Why React known as React
React is called React because it reacts on the change made in data on which a depends in React.
Whenever a data is change the component depend on that data automatically updated which allows for efficient and seamless updates to the user interfaces.

## Q6-- Difference between React and React.Dom
We have two package in React library --
1-React
2-React-DOM
React - It holds the react source for components,state,props and all code that is react.
React-DOM - It is medium B/W React and DOM in browser. It is responsible for rendering UI on browers.

## Q7-- Difference B/W react.devlopment.js and react.production.js
react.devlopment is used during the devlopment of our react application and react.production is ued to build our react app for production environment.
when app is build by using development CDN links it is slower and less optimized than production builds. because it has many things availbale for edvelopers ease ex- debugger , react devlopers tool ,React devtools profiler.

## Q8--Async and Defer
These both are attributes of script tag.

without any attribtes-- HTML parsing stops whenever a sript tag encounterd that script is fetched than this script gets executed after that HTML parsing continued.

Async--It fetch the scripts parallely with parsing and when fetching is completed it executes all the scripts after that HTML parsing continued.It does not gurantee the order of execution of scripts.

Defer--It fetch the scripts parallely with parsing and when parsing is completed it executes all the scripts.It gurantee the order of execution of scripts.


### Async Attribute:
The async attribute allows the script to be executed asynchronously. This means that the script will not block the parsing of the HTML document, and it will continue to load and parse the HTML while the script is being downloaded and executed.
### Defer Attribute:
The defer attribute, similar to async, allows the script to be executed asynchronously. However, the key difference is that the script will be executed in order, after the HTML document has been fully parsed.

# Example:
```````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async and Defer Example</title>
    <!-- Include a script with async attribute -->
    <script async src="async-script.js"></script>
    <!-- Include a script with defer attribute -->
    <script defer src="defer-script.js"></script>
</head>
<body>
    <!-- Your HTML content goes here -->
</body>
</html>

```````
In this example, async-script.js and defer-script.js are JavaScript files. The async-script.js will be executed asynchronously, meaning it won't wait for the HTML parsing to complete. On the other hand, defer-script.js will be executed in order after the HTML parsing is done.

Make sure to use these attributes based on your specific requirements. If script order matters and you want to execute them in order, use defer. If order doesn't matter and you want them to be loaded and executed as soon as possible, use async.

### If you don't specify the async or defer attribute, 
the default behavior is that the script is executed synchronously and will block the parsing of the HTML document until the script has been completely downloaded and executed.
```````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Default Script Example</title>
    <!-- Include a script without async or defer attribute (synchronous) -->
    <script src="regular-script.js"></script>
</head>
<body>
    <!-- Your HTML content goes here -->
</body>
</html>

```````
In this case, regular-script.js will be executed synchronously, and the HTML parsing will be blocked until the script is fully downloaded and executed. This might lead to slower page loading times, especially if the script is large or takes time to execute. Using async or defer can help improve page load performance in such cases.