
// ---------------For single Element------------------------

/*
const parent = React.createElement(
  "h1",
  {
    id: "heading",
    xyz:"abc"
  },
  "Hello World from React!"
);
*/

// ----------------For Nesting of Element--------------------------

/* 
<div id="parent">
    <div> id="child"
        <h1>I am H1 tag!</h1>
    </div>
</div>
*/

/*
const parent = React.createElement(
    "div",
    {
        id:"parent"
    },
    React.createElement(
        "div",
        {
            id:"child"
        },
        React.createElement(
            "h1",
            {},
            "I am H1 tag!"
        )
    )
)
*/

// --------------------For same level sibling (Array the third arg)------------------------------

/* 
<div>
    <div>
        <h1>Hi am H1 tag</h1>
        <h2>Hi am H2 tag</h2>
    </div>
</div>
*/
/* 
const parent = React.createElement(
    "div",
    {
        id:"parent"
    },
    React.createElement(
        "div",
        {
            id:"child"
        },
        [
            React.createElement("h1",{},"Hi I am H1 tag"),
            React.createElement("h1",{},"Hi I am H2 tag")
        ]
    )
)
*/

// -----------------For More Nesting and sibling-------------------------------

/* 
<div>
    <div>
        <h1>Hi am H1 tag</h1>
        <h2>Hi am H2 tag</h2>
    </div>
        <div>
        <h1>Hi am H1 tag</h1>
        <h2>Hi am H2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {
        id:"parent"
    },
    [
    React.createElement(
        "div",
        {
            id:"child"
        },
        [
            React.createElement("h1",{},"Hi I am H1 tag"),
            React.createElement("h1",{},"Hi I am H2 tag")
        ]
    ),
    React.createElement(
        "div",
        {
            id:"child"
        },
        [
            React.createElement("h1",{},"Hi I am H1 tag"),
            React.createElement("h1",{},"Hi I am H2 tag")
        ]
    )
]
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
