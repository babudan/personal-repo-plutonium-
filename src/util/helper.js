const PrintDate = function(){
    const b = new Date();
   console.log(b.getDate());
}

const PrintMonth = function(){
    const c = new Date();
   console.log(c.getMonth()+1);
}

const getBatchInfo = function(){
    const d = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const l = new Date();
     let day = d[l.getDay()];
   console.log(`Radon, week3 ${day}, the topic for today is Nodejs module system`);
}

module.exports.PrintDate=PrintDate;
module.exports.PrintMonth=PrintMonth;
module.exports.getBatchInfo=getBatchInfo;