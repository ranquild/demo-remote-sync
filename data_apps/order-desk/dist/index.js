globalThis.__dataAppFactory__ = function () {
  var h = React.createElement;
  function App() {
    return h("div", { style: { height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Lato, sans-serif", color: "#303d46" } },
      h("h1", { style: { margin: 0, fontSize: 28 } }, "Order desk"),
      h("p", { style: { margin: "8px 0 0", color: "#5a6370" } }, "Look up customers and change their tier."));
  }
  return { component: App };
};
