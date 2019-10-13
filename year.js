var express = require('express');
var app = express();
app.listen(3085);
app.get("/year/:value", function(req, res) {
    var year= Number(req.params.value);
    if ((((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) && (anno % 4000 != 0))) {
        res.json({result:"Anno Bisestile"})
    } else res.json({result:"Anno non Bisestile"});
})