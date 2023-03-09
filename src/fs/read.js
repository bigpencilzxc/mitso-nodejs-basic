import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
    try {
        const data = await fs.readFile(path.join(__dirname, "files", "fileToRead.txt"), {
            encoding: 'utf-8',
            flag: 'r'
        });
        console.log(data);
    } catch (err) {
        console.log("FS operation failed");
    }

};

await read();