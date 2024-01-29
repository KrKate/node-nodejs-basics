import { unlink } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';

const remove = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, "files", "fileToRemove.txt");
    await unlink(filePath);
    console.log("File removed successfully");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();