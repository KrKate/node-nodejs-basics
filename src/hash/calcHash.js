import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = () => {
    return new Promise((resolve, reject) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filepath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
        const fileStream = fs.createReadStream(filepath);
        const hash = crypto.createHash('sha256');

        fileStream.on('data', (chunk) => {
            hash.update(chunk);
        });

        fileStream.on('end', () => {
            const fileHash = hash.digest('hex');
            console.log(`SHA256 Hash of file: ${fileHash}`);
            resolve(fileHash);
        });

        fileStream.on('error', (err) => {
            reject(err);
        });
    });
};

calculateHash();