var express = require('express');
var app = express();
app.listen(3075);
var money = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
app.get("/money/:value/:payment", function(req, res) {
    var memo= [];
    var value = Number(req.params.value);
    var payment = Number(req.params.payment);
    if (value > payment) {
        res.status(401).json({message: 'importo pagato inferiore a quello dovuto'});
    } else
    var rest = payment - value;
    var i = 0;
    memo.push(
        {
            "rest" : rest
        },
        {
            "500" : 0,
            "200" : 0,
            "100" : 0,
            "50" : 0,
            "20" : 0,
            "10" : 0,
            "5" : 0,
            "2" : 0,
            "1" : 0,
            "0.5" : 0,
            "0.2" : 0,
            "0.1" : 0,
            "0.05" : 0,
            "0.02" : 0,
            "0.01" : 0
        }
    );
    while(rest.toFixed(2) > 0) {
        if (rest >= money[i]) {
            memo[1][money[i]]+= 1;
            rest = rest - money[i];
            i--;
        } else i++;
        }
        for (i=0; i<16; i++) {
            if (memo[1][money[i]] == 0)
                delete memo[1][money[i]];
        }
        res.json(memo);
})