const greet = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, tag));


const tag = React.createElement("h1", {
    id: "heading"
}, "Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(greet);

