var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "databaseWONG"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var values = [
    ['Nasdaq GIDS', '^IXIC', 161867759, 14039],
    ['Chicago Options', '^RUT', 1618605008, 2257],
    ['NY Mercantile', 'CL=F', 1618606799, 63]
  ];


//   var sql = "INSERT INTO customers (name, address) VALUES ?";
var sql = "INSERT INTO TR2 (fullExchangeName, symbol, regularMarketTime, previousClose) VALUES?";

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    console.log(result.affectedRows)

    con.end();
  });

});