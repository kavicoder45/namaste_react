/**
 * <div class="parent">
 * <div class = "child1">
 * <h1>I am from child1</h1>
 * <h2>I am also from child1</div>
 * </div>
 * <div class="child2">
 * <h1>I am from child1</h1>
 * <h1> I am from child2</h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child1" }, [
    React.createElement("h1", "{}", "I am h1 from child I "),
    React.createElement("h1", {}, "I am form h1 from child I"),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement("h1", "{}", "I am h1 from chi 7ld II "),
    React.createElement("h1", {}, "I am form h1 from child II"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
