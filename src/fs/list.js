import { promises as fs, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folderPath = path.join(__dirname, "files");

  try {
    await fs.access(folderPath, constants.F_OK);
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();