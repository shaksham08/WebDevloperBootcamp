var request = require("request");
var bodyParser = require("body-parser");
request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body) {
  if (!error && response.statusCode == 200) {
     var parsedContent= JSON.parse(body);
     console.log(parsedContent.name);
  }
});
