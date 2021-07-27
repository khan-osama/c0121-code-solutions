const fs = require('fs');

fs.readFile('./' + process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  const copy = data;
  fs.writeFile('' + process.argv[3], copy, err => {
    if (err) throw err;
    console.log(copy);
  });
});
