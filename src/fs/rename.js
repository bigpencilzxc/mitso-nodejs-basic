import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const filePath = path.join(__dirname, "files", "wrongFilename.txt");

const rename = async () => { 
    try {
        await fs.rename(path.join(__dirname, "files", "wrongFilename.txt"),path.join(__dirname, "files", "properFilename.md"))

        console.log("File renamed")
    } catch (err) {
        console.log("FS operation failed")
    }
};

await rename();