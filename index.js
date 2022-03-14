const http = require('http');
const port = process.env.PORT || 3000;
// include mysql module
var mysql = require('mysql');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node west Loction!!!\n'
  res.end(msg);
  // create a connection variable with the details required
var con = mysql.createConnection({
host: "shstageeusmysql01.mysql.database.azure.com", // ip address of server running mysql
user: "sheaststage@shstageeusmysql01", // user name to your mysql database
password: "SHPassword@123" // corresponding password
});

// connect to the database.
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});


