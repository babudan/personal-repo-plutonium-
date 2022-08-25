const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
// const commonMW = require ("./middlewares/commonMiddlewares")
const moment = require ("moment");
var ip = require("ip");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ArindamDan:Arindam12345@cluster0.nl5g5.mongodb.net/Arindam-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




app.use('/', route);

app.use(
    function(req,res,next) {
        const date = moment().format("DD-MM-YYYY , hh:mm:ss");
        console.log(date);
        //     // var adress = ipadress.getClientIp(req);
            //  var a = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress
        //     // var ip = req.ip.split(':ffff:x.x.x.x').pop();
        //     // var ipInfo = getIP(req);
        //     //  console.log(ipInfo);
            console.log(ip.address());
            // var b = req.ip;
            // console.log(b.toString());
                var rou = req.path;
                console.log(rou);
                res.send({msg : "end"});
    }
);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
