import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import { Readable } from "stream";
import path from "path";

const dirname = fileURLToPath(new URL(".", import.meta.url));
const fileToRead = path.join(dirname, "files", "fileToRead.txt");

class MyRead extends Read {
    constructor(opr) {
        super(opr);
    }

    _read() {
        const input = createReadStream(fileToRead)
        input.on("data", (chunk) => {
          return chunk;
        })

    }
}

const read = async () => {
    const readableStream = new MyReadable();
    stdout.pipe(readableStream);
};

await read();