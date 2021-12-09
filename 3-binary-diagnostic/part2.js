const { data, miniData, findBit } = require("./common");

// var oxygen = JSON.parse(JSON.stringify(data));

// for (let i = 0; i < 12; i++)
// {
//     if (oxygen.length > 1)
//     {
//         var commonBit = findBit(data, i, 1);
//         oxygen = oxygen.filter(entry => entry[1] == commonBit);
//     }
// }


var testO2 = JSON.parse(JSON.stringify(miniData));
console.log('testO2: ', testO2)
for (let i = 0; i < 5; i++)
{
    if (testO2.length > 1)
    {
        var commonBit = findBit(data, i, 1);
        testO2 = testO2.filter(entry => entry[i] == commonBit);
    }
    console.log('testO2: ', testO2)

}

console.log(testO2[0]);




