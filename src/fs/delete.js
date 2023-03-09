import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
    try {
        await fs.rm(path.join(__dirname, "files", "fileToRemove.txt"))

        console.log("File removed")
    } catch (err) {
        console.log("FS operation failed")
    }
};

await remove();