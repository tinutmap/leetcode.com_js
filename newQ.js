import { promises as fs } from "fs";
import { join } from "path";
import promptSync from 'prompt-sync'; // credit: https://stackoverflow.com/a/65852551/16236333
const prompt = promptSync();

async function copyDir (src, dest) { // credit https://stackoverflow.com/a/64255382/16236333
    await fs.mkdir(dest, { recursive: true });
    let entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = join(src, entry.name);
        let destPath = join(dest, entry.name);

        entry.isDirectory() ?
            await copyDir(srcPath, destPath) :
            await fs.copyFile(srcPath, destPath);
    }
}

try {
    const q = prompt('Question number: '),
        qn = q.match(/\d+/)[0],
        templateFolderName = 'qnnn'
    if (qn) copyDir('./' + templateFolderName, './q' + qn)
} catch (e) {
    console.log(e)
}