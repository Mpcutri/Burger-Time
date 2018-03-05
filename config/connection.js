// Sets up the Express app to handle data parsing

var mysql = require("mysql");
var port = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;