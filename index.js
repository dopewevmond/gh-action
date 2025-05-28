const http = require("http")
require("dotenv").config()

const port = process.env.SERVER_PORT || 3000
const hostname = process.env.HOST_NAME || "localhost"
const appName = process.env.APP_NAME || "MyApp"

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain")

  const { url, method } = req

  console.log(`${method} ${url}`)

  switch (url) {
    case "/":
      res.statusCode = 200
      res.end(`Hello! welcome to my server ${appName}`)
      break
    case "/about":
      res.statusCode = 200
      res.end("this is a basic http server in Node.js")
      break
    default:
      res.statusCode = 404
      res.end("ooops. route not found")
      break
  }
})

server.listen(port, hostname, () => {
  console.log(`App Name: ${appName}`)
  console.log(`Running on http://${hostname}:${port}`)
})
