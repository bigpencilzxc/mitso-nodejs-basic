import path from 'path';
import { createServer as createServerHttp} from 'http';
import { fileURLToPath  } from 'url';
import { release, version } from 'os';
import './files/c.js';
import data1 from './files/a.json' assert { type: "json" };
import data2 from './files/b.json' assert { type: "json" };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = data1;
} else {
    unknownObject = data2;
}

console.log(Release ${release()});
console.log(Version ${version()});
console.log(Path segment separator is "${path.sep}");

console.log(Path to current file is ${__filename});
console.log(Path to current directory is ${__dirname});

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(Server is listening on port ${PORT});
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer
}