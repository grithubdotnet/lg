var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    // we're connected!
    console.log("connected");
    var kittySchema = new mongoose.Schema({
      name: { type: String, required: true },
    });
    var Kitten = mongoose.model('Kitten', kittySchema);
  
    var silence = new Kitten({ name: 'Silence' });
  
    
    console.log(silence.name); // 'Silence'
  
    silence.save(function (err, fluffy) {
      if (err) return console.error(err);
      console.log(fluffy);
    });
  });
 
  res.send({ a: 'respond with a resource' });
});

module.exports = router;
