function About(){
  const ig = m("a", { href: "https://instagram.com/nbrthx" }, "@nbrthx")
  
  return {
    view: () => m("div", [
      m("h1", "About"),
      m("p", "this template for simple setup node js app with koajs and mithril.js"),
      m("h2", "Contact"),
      m("p", ["Instagram: ", ig]),
      m(m.route.Link, { href: "/" }, "Home")
      ])
  }
}

export default About