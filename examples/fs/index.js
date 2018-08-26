import fs from 'fs';
import path from 'path';
import odisha from '../../index';

const filePath = path.join(__dirname, 'dummy.txt');

// readfile using callback
fs.readFile(filePath, { encoding: 'UTF-8' }, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// promisifing readfile method and using it
const readFileAsync = odisha.promisify(fs.readFile);
readFileAsync(filePath, { encoding: 'UTF-8' })
    .then(data => console.log(data))
    .catch(err => console.error(err));

// using promisify all to promisify the entire package
const fsAsync = odisha.promisifyAll(fs);
console.log(fsAsync);

fsAsync.readFileAsync(filePath, { encoding: 'UTF-8' })
    .then(data => console.log(`reading file async: ${data}`))
    .catch(err => console.error(err));
