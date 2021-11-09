const http = require("http");

const PORT = process.env.PORT || 5000;

let x = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end("billu");
});

x.listen(PORT, "0.0.0.0", () => {
  console.log("Server Started");
});
