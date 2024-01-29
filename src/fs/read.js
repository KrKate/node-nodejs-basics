import { readFile } from "fs/promises";
const read = async () => {
    try {
      const data = await readFile(`./files/fileToRead.txt`, "utf-8");
      process.stdout.write(data);
    } catch (error) {
      console.error("FS operation failed", error);
    }
  };

await read();

