const Koa = require("koa")
const send = require("koa-send")
const serve = require("koa-static")
const bodyParser = require("koa-bodyparser")

const app = new Koa()

app.use(bodyParser())
app.use(serve(__dirname+"/public"))
app.use(async ctx => {
  if(ctx.path == "/api"){
    ctx.body = { text: "Hello World" }
  }else{
    await send(ctx, "index.html", { root: "public" })
  }
})

app.listen(3000, () => console.log("Listen on",3000))