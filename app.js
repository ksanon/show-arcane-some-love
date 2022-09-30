const http = require('http')
const fs = require("fs")

const hostname = process.env.HOSTNAME || "localhost"
const port = process.env.PORT || 3000


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  fs.readFile(__dirname + '/index.html', (err, data) =>{

    if(err){
        console.error(err);
        res.end();
    } else {
        res.write(data);
        res.end();
    }
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})