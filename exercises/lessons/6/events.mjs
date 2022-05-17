import EventEmitter from 'events';
import fs from "fs";

const filename = 'database/notes.json';
const customEmitter = new EventEmitter();

customEmitter.on('read', () => {
    console.log(`I'm reading the file.`)
})

customEmitter.on('read', (filename) => {
    console.log(`Filename: ${filename}.`)
})

fs.readFile(filename, (error, result) => {
    if (error) {
        console.error('File non corretto.');
        return
    }
    const dataset = JSON.parse(result.toString());
    customEmitter.emit('read', filename);
});
