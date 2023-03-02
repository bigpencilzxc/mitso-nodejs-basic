import fs from "fs/promises"
import path from "path"
import * as url from "url"

const _dirname = url.fileURLToPath(new URL(".", import.meta.url))
const filePath = path.join(_dirname, "files", "fresh.txt")

const MESSAGE = 'I am fresh and young'

const create = async () => {
    try{
        const files = await fs.readdir(path.join(_dirname, "files"))
        
        if (files.includes("fresh.txt")) throw new Error('FS operation failed')

        await fs.writeFile(filePath, MESSAGE, {
            flag: "wx"
        })

        console.log(
            "The file has been created and information added"
        );
    }catch (err){
        console.log(err.message);
    }
};

await create();