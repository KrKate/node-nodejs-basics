import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.join(__dirname, "files");
  const copyDir = path.join(__dirname, "files_copy");

  try {
   await fs.access(dirPath);
  } catch (error) {
   console.error("FS operation failed");
   return;
  }

  try {
    await fs.access(copyDir);
    console.error("FS operation failed");
    return;
  } catch(error) {
  }

  fs.mkdir(copyDir);

  const walkThroughDir = async (currentPath) => {
    const directory = await fs.readdir(currentPath);

    for (const file of directory) {
      const filePath = path.join(currentPath, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        const copyPath = path.join(copyDir, path.relative(dirPath, filePath));

        await fs.mkdir(copyPath);
        await walkThroughDir(filePath);
      } else {
        const copyPath = path.join(copyDir, path.relative(dirPath, filePath));
        fs.copyFile(filePath, copyPath);
       }
     }
   };

  await walkThroughDir(dirPath);
};

await copy();

