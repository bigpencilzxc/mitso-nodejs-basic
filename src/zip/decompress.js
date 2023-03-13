import { createReadStream, createWriteStream } from "fs";
import path from "path"
import * as url from "url"
import { createUnzip} from "zlib";

const _dirname = url.fileURLToPath(new URL(".", import.meta.url))
const filesPath = path.join(_dirname, "archive.gz")

const decompress = async () => {
    const input = createReadStream(filesPath)
    const zip = createUnzip()
    const write = createWriteStream(path.join(_dirname,"fileToCompress.txt"), {
        encoding: "utf-8"
    })

    try {
        input.pipe(zip).pipe(write)
        console.log("file unzipped")
    } catch (err) {
        console.log(err.message)
    }
};

await decompress();