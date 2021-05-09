let stock= function () {
    var unirest = require ("unirest");


    var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary");
    
    req.query({
        "region": "US"
    });
    
    req.headers({
        "x-rapidapi-key": "fd2db1ff15msha362e5311ad4448p1a503bjsn16a0ff2c95d1",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    });
    
    
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body['marketSummaryAndSparkResponse']['result']);
        return res.body['marketSummaryAndSparkResponse']['result'];
    });

}
let hello = function () {
   return "qwe";
 }


exports.stock =stock;

exports.hello =hello;

