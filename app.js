const app = require('./config/config')();

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Aeee!! Vai ter bombom pra todo mundo!");
});