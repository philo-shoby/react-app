const head = React.createElement("h1",{id: 'heading'},
    ["Hello React!", React.createElement("div",{ id: 'parent'},
        [React.createElement("div",{ id: 'child'},
            [React.createElement("h1",{}, "Hello React testing1"),
            React.createElement("h2",{}, "Hello React testing2")]
        ),React.createElement("div",{ id: 'child2'},
            [React.createElement("h1",{}, "Hello React testing1"),
            React.createElement("h2",{}, "Hello React testing2")]
        )]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);