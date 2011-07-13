var fs      = require('fs');
var util    = require('util');
var path    = require('path');
var stalker = require('stalker');

var dir     = process.argv[2];

stalker.watch(dir,function _watch(err, file) {
  console.log('found file: ' + file);

  var rs = fs.createReadStream(file);
  var ws = fs.createWriteStream(path.join('out', path.basename(file)));

  util.pump(rs, ws, function _pump(err) {
    if (err) {
      console.log('[_pump] Error: ' + err);
      return;
    }

    fs.unlink(file);
  });
});

