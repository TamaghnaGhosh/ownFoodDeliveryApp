import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child" }, [
            React.createElement("h1", {}, "I am a H1 tag"),
            React.createElement("h2", {}, "I am a h2 tag")
        ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", {}, "I am a H1 tag"),
            React.createElement("h2", {}, "I am a h2 tag")
        ])
    ]
);


// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent) // object

//React.createElement(TagName,attributes,children)

root.render(parent);
