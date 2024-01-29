import { promises as fs, constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, "files", 'wrongFilename.txt');
    const renamefilePath = path.join(__dirname, "files", 'properFilename.md');
  try {
    await fs.access(filePath, constants.F_OK);
    try {
      await fs.access(renamefilePath, constants.F_OK);
      throw new Error('FS operation failed');
    } catch (error) {
      await fs.rename(filePath, renamefilePath);
      console.log('File renamed successfully');
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();