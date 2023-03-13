import { createReadStream, createWriteStream } from "fs";
import path from "path"
import { pipeline } from "stream";
import * as url from "url"
import { createGzip} from "zlib";

const _dirname = url.fileURLToPath(new URL(".", import.meta.url))
const filesPath = path.join(_dirname, "files", "fileToCompress.txt")

const compress = async () => {
    const input = createReadStream(filesPath, {
        encoding: "utf-8",
    })
    const zip = createGzip()
    const write = createWriteStream(path.join(_dirname, "archive.gz"));

    try {
        input.pipe(zip).pipe(write)
        console.log("file zipped")
    } catch (err) {
        console.log(err.message)
    }
};

await compress();