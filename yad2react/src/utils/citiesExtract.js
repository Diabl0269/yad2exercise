const path = './cities.JSON';
const fs = require('fs');

const cb = (data) => {
    const cityNames = data.ROW.map(cityData => cityData['שם_ישוב']);
    console.log(cityNames);
    fs.writeFile('./cityNames.JSON', JSON.stringify(cityNames), err => console.log(err));
}

const readJson = (path, cb) => {
    fs.readFile(require.resolve(path), (err, data) => {
        console.log('got here');
        
      if (err)
        cb(err)
      else
        cb(JSON.parse(data))
    })
  }

  readJson(path, cb);