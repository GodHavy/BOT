var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 149130946,
  channelSecret: 5313691b73ddee47cec8e4775510cc32,
  channelAccessToken: jGH83aWL02sIT9+H0pc3FUsxsgHdEa0zV/K7fwzNkShIT6p5gPK6duu4nSrWimotReNxj0rAzjdywicd+l2lYAnqS0OvG1RDqkQWmko9oyQfmoAeCyw9ScB/tHLXvtRijR7M4DLKNy81E6uYFk5vhgdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});