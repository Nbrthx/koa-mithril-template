function Home(){
  var count = 0
  
  const add = () => count++
  
  return {
    view: () => m("div", [
      m("h1", "Hello World"),
      m("p", "this is where i start coding with mithril.js for frontend and koajs for server"),
      m("button", { onclick: add }, count),
      m("br"), m("br"),
      m(m.route.Link, { href: "/about" }, "About")
      ])
  }
}

export default Home