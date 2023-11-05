const heading = React.createElement("div",
{id:"heading",xyz:"abc"},
[React.createElement("h1",
{id:"children",xyz:"abc"},
"hi Mayur form React"),React.createElement("h1",
{id:"children",xyz:"abc"},
"hi Mayur form React"),React.createElement("h1",
{id:"children",xyz:"abc"},
"hi Mayur form React")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)