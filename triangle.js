var express = require('express');
var app = express();
app.listen(3045);
app.get("/triangle/:l1/:l2/:l3", function(req, res) {
  var l1 = Number(req.params.l1);
  var l2 = Number(req.params.l2);
  var l3 = Number(req.params.l3);
  if ((l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2)) {
    if (l1 == l2 && l2 == l3) {
      res.json({result:"Triangolo equilatero"})
    } else
      if (l1 == l2 || l2 == l3 || l1 == l3) {
      res.json({result:"Triangolo isoscele"})
      } else res.json({result:"Triangolo scaleno"})   
  } else res.status(401).json({message: 'inserimento errato'});
})