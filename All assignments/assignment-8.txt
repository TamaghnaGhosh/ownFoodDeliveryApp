## Nested Routing 
Nested Routing is implemented using `outlet` in react router dom. Sometimes we don't want to chnage entire component on url change we only want to change a child of the component in that component. It is implemented by outlet and children provided by react router dom.
ex- configuration for nested routes

````
const appRouter=createBrowserRouter([
  {
     path:"/",
   element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant",
        element:<RestaurantPage/>
      }
    ]
  }])

  ````

  component using thi config

  ````
  const AppLayout = () => {
   return (
      <div className="appLayout">
        <Header  />
        {/* <Body restaurantsList={filteredList} /> */}
        <Outlet/>
  
      </div>
  
   )
  }
  ````

## Life Cycle methods of class based component
when ever we use class based component it is like making a new object of that class so it's constructor is the first function that is got called.There are some other methods also there that are provided by react to class based component.
### 1- ComponentDidMount -- 
it is called after our component is rendered on UI means our render function got called.
### 2- ComponentDidUpdate -- 
It got called after every state change in our component.
### 3- ComponentWillUnmount --
It is function that is got called just before component is going to unmounted from the screen .

So sequence of function getting called is

`Constructor --> Render --> ComponentDidMount --> ComponentDidUpdate --> ComponentWillUnmount`

## ComponentDidMount --
it is function that  called just after our component is rendered on UI means our render function got called. So we can use it do any work that is to be done just after our component gets render on the screen.
ex- Api calls to fetch data from server , registering some timer function or some server events 

## ComponentWillUnmount --

It is function that is got called just before component is going to unmounted from the screen . So we can use it to do the task that should be done before our component gets unmounted like deregidtering from a timer function or deregistering some server event.

````
async componentDidMount() {
  this.setTimeout(() => {
      console.log("set timeout function called")
      
    }, 1000);
  }

  componentWillUnmount()
  {
    this.clearInterval();
   
  }
````
In upper example we are registering a function with setTimeout in componentDidMount and in componentWillUnmount deregistering that function.


## Super(props) in constructor
`super` is the keyword that is used to call super class contructor. when ever we don't write our constructor javaScript calls its default constructor that intialise the all props to a empty object. But if we write our own constructor than JS don't calls the default constructor so we have explicitly call the super class contructor so for thae we have to use `super()` keyword.

`super()` calls the super class constructor function but if we want to use props in our this than we need to call `super(props)` .That will assign the props and we can use our this.props in our constructor . But we can use this.props in our render function even if we used super() because React assigns props on the instance right after calling the component constructor.

## why useEffect can't have async callback function
useEffect hook expect its callback function to return either a function or nothing but async function always return a promise or any other primitive datatype wrapped in promise and promise can't be called as function . not able to return a cleanUp function can cause many issues in our app most common is `Memory Leak`.

## createHashRouter and createMemoryRouter
react router dom gives three types of routers
## 1- createBrowserRouter - 
it uses the history API of browser to   keep y\our UI in sync with the URL. It routes as a normal URL in the browser and assumes that the server is handling all the request URLand points to root index.html .There is some legacy browers that don't support this History API.

ex--
````
http://localhost:1234/about
````

## 2- createHashRouter
It uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL. The hash portion of the URL won’t be handled by the server, the server will always send the index.html for every request and ignore the hash value
ex--
````
http://localhost:1234/#/about
````
in this case server will receive only `http://localhost:1234` and  server will always send the index.html for every request and ignore the hash value.
Frontend will be responsible to show the page according to the URL after #

## 3- createMemoryRouter
memory router keeps the URL changes in memory not in the browsers. It keeps the history of the URL in memory and it does not read or write to the URLso the user can not use the browser’s back button as well as the forward button. It doesn’t change the URL in your browser. It is very used in testing and non-browser environments like React Native.
