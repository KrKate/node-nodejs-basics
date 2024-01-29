import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.join(__dirname, "files", 'fileToWrite.txt');
  const writableStream = createWriteStream(dirPath);

  process.stdin.pipe(writableStream);

  writableStream.on('error', (error) => {
    console.error(error.message);
  });
};

await write();
// после запуска node src/streams/write.js нужно ввести что-нибудь в терминал
//после нажать ctrl+c. Введенное появится в файле fileToWrite.txt