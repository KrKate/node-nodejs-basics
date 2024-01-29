import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dirPath = path.join(__dirname, "files", 'fileToRead.txt');
    const readableStream = createReadStream(dirPath);

    readableStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    readableStream.on('error', (error) => {
      console.error(error.message);
    });
};

await read();