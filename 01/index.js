const fs = require("fs");
let rawData = "";
let elfArray = [];
let mappedArray = [];

function findMostCaloricElf() {
  fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
    rawData = data.toString();
    elfArray = rawData.split("\r\n\r\n");
    mappedArray = elfArray.map((elfData) => {
      let mappedElf = elfData
        .split("\r\n")
        .reduce((total, currentVal) => {
            return total + Number(currentVal);
        }, 0);
        return mappedElf
    });
    for(let i=0;i<3;i++){
        let maxCalories = Math.max(...mappedArray)
        console.log(maxCalories);
        const index = mappedArray.indexOf(maxCalories)
        mappedArray.splice(index,1)
    }

  });
}

findMostCaloricElf();
