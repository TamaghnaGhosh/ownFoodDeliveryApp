# What is prop drilling?

Prop drilling occurs when a parent component generates its state and passes it down as props to its children components that do not consume the props – instead,
they only pass it down to another component that finally consumes it.

# What is lifting the state up?

Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent,
and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.

# Context Provider:

- Definition: The Context Provider is a component in React that provides a specific piece of data (or state) to its child components.
- Functionality: It "provides" the data or state to all its descendants, allowing them to access it without explicitly passing it through props.
- Usage: Wrap the parent component's JSX with <MyContext.Provider value={myData}>...</MyContext.Provider>. The value prop contains the data you want to share.

```
const MyContext = React.createContext();

function MyComponent() {
  const myData = "Hello from Context!";
  return (
    <MyContext.Provider value={myData}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
```

# Context Consumer:

- Definition: The Context Consumer is a component that subscribes to the data provided by the Context Provider.
- Functionality: It allows components to consume or use the shared data without being direct children of the Context Provider.
- Usage: Wrap the part of the component tree where you want to access the context with
  <MyContext.Consumer>{(value) => /_ render something based on the context value _/}</MyContext.Consumer>.

```
function ChildComponent() {
  return (
    <MyContext.Consumer>
      {(value) => <p>{value}</p>}
    </MyContext.Consumer>
  );
}
```

# If you don’t pass a value to the provider does it take the default value?

- Yes, if you don't provide a value prop to the Context Provider, it will take the default value specified when creating the context using React.createContext(defaultValue).

```
const MyContext = React.createContext("Default Value");

function MyComponent() {
  return (
    <MyContext.Provider>
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  return (
    <MyContext.Consumer>
      {(value) => <p>{value}</p>}
    </MyContext.Consumer>
  );
}
```
- In this example, since the MyContext.Provider does not have a value prop, it will use the default value "Default Value" that was specified when creating the context. Therefore, the ChildComponent will render a <p> element with the text "Default Value".
