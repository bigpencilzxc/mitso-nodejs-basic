import fs from "fs/promises";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
    try {
        await fs.cp(path.join(__dirname, "files"), path.join(__dirname, "files_copy"), {
            recursive: true,
            errorOnExist: true,
            force: false
        });


        console.log("Files copied")
    } catch (err) {
        console.log("FS operation failed");
    }
};

await copy();