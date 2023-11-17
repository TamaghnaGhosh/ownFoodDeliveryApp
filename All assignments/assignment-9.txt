## Ways to add images in our react app
### 1-Use the import keyword.
You can import a file  in a JavaScript module. This will tell the webpack to include that file in the bundle during builds
ex
````
import House from "./house.png

function component=()=>
{
    return <img src={House}/>
}
````
### Use the require keyword.
We can also use the require keyword to load the images into your component.
ex--
````


function component=()=>
{
    return <img src={require("./House")}/>
}
````

### Load images directly from the network
We can directly give usl of a image in  src  attribute.
ex-
````


function component=()=>
{
    return <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/hipomsmb06yd7dtvlovg"/>
}
````

## Console of useState
useState returns a array of two elements.
1- First element of the array having the satate with initial values that we have given.
2- Second value has the function to change that state.

## Difference between client side routing and server side routing
### Client side routing--
A client-side routing happens when the route is handled internally by the JavaScript that is already loaded . When a user clicks on a link, the URL changes but the request to the server not made. It can result in making changes in state and that change in state can result into showing some other component.
### Server side routing--
Whenever user clicks on link or button in turn of that we need to do many changes like showing some new page with some new data that will result into server call thses kind of routing are called server side routing.

## If we don't add dependency array in useEffect
The useEffect will be called every time when the component render.

## What is SPA
An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the required body content of that single document via JavaScript code and Fetch API when different content is to be shown.

This  allows users to use websites without loading whole new pages from the server, which can result in better performance and a more dynamic experience.