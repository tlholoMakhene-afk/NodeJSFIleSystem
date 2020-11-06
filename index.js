const fs = require('fs');
let Names = ["Tlholo","Makhene","HappyBirthDay","Tumisho","Mary", "Null", "Deliwe","Delete","Stephen","Sefako","Me"];

Names.forEach((item)=>{
fs.appendFileSync("random.txt", item+ "\n", (err)=>{
    if (err) throw err;
} );
});

const removeItems = (data, lines = []) => {
    return data
        .split('/n')
        .filter((val, idx) => lines.indexOf(idx) === -1)
        .join('/n');
}

fs.readFile("random.txt", 'utf8', (err, data) => {
    if (err) throw err;
    // remove the thrid item, 
    fs.writeFile("latest.txt", removeItems(data, [2,5,7,10]), 'utf8', function(err) {
        if (err) throw err;
        console.log("the items have been removed.");
    });
})