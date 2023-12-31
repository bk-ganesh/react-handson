
/**
 * <div id="parent">
 *     <div id="child_1">
 *        <h1>Child1-->h1 tag</h1>
 *        <h2>Child1-->h2 tag</h2>
 *     </div>
 *     <div id="child_2">
 *        <h1>Child2-->h1 tag</h1>
 *        <h2>Child2-->h2 tag</h2>
 *     </div> 
 * <div>
 */




const nestedElem= React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child_1"},
[React.createElement("h1",{},"Child1-->h1 tag"),React.createElement("h2",{},"Child1-->h2 tag")]),
React.createElement("div",{id:"child_2"},
[React.createElement("h1",{},"Child2-->h1 tag"),React.createElement("h2",{},"Child2-->h2 tag")])]);



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedElem);