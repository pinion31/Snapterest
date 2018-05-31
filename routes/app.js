var express = require('express');
var router = express.Router();

router.post('/add-user', (req,res) => {
    const {username, email, city, state } = req.body;
    // save to db
    res.send({username, email, city, state});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
