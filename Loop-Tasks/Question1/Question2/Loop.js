let rowNumber = parseInt(prompt("Define the row number"));

let counter = 1;
for (let i = 1; i <= rowNumber; i++) {
    
    document.write(`<br><br>`);
    for (let j =0 ;j<i ;j++) {
        document.write(`${counter+" "}`);
        counter++;
    }


}