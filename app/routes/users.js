let express = require('express');
let router = express.Router();

/* GET users listing. */
// app.jsで/users配下であることを定義しているので、'/' -> '/users/'　である。
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
