import fs from "fs";
const filename = 'database/notes.json';

console.log("\n > INIZIO SYNC");
let data = fs.readFileSync(filename)
let dataset =  JSON.parse(data.toString());

dataset.push({
    title: 'Nota nuova',
    body: `Nota creata - ${new Date().toLocaleString('it-IT')}`,
});

fs.writeFileSync(filename, JSON.stringify(dataset))

data = fs.readFileSync(filename)
dataset =  JSON.parse(data.toString());

console.log(" > FINE SYNC");

console.log(' ~~~~ NEXT STEP ~~~~');



console.log("\n > INIZIO ASYNC");
fs.readFile(filename, (error, result) => {
    if (error) {
        console.error('File non corretto.');
        return
    }
    const dataset =  JSON.parse(result.toString());

    dataset.push({
        title: 'Nota nuova',
        body: `Nota creata - ${new Date().toLocaleString('it-IT')}`,
    });

    fs.writeFile(filename, JSON.stringify(dataset), (error, result) => {
        if (error) {
            console.error('File non corretto.');
            return
        }

        console.log(" > FINE ASYNC");
    })
} )
console.log(' ~~~~ NEXT STEP ~~~~');

