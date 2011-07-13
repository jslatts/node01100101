var fs = require('fs');

//console.dir(process.argv);

var showHidden = false,
    flags      = process.argv[2],
    directory  = process.argv[3];

if (flags === '-a') {
  showHidden = true;
}
else {
  directory = flags;
}

fs.readdir(directory, function _readdir(err, files) {
  if (err) {
    console.log('[readdir] Error: ' + err);
    return;
  }


  files.forEach(function _filesForEach(f) {
    if (showHidden || f[0] !== '.') {
      console.log(f);
    }
  });
});


