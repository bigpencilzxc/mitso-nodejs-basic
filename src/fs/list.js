import fs from "fs/promises";
import path, { dirname } from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
    try {
        const files = await fs.readdir(path.join(__dirname, "files"), )
        console.log(files)
    } catch (err) {
        console.log("FS operation failed")
    }
};

await list();