import { Interface, createInterface } from "readline";
import { validateDataSize, getFinalDistanceArray, getTestCases, getBitmapDimensions, Dimensions } from "./utils";


const input: string[] = [];

const rl: Interface = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();
console.log("Please enter your input data. At the end, please press Enter followed by the letter 'q'.\n")
rl.on('line', function (cmd) {
    input.push(cmd);  
    if(cmd.includes('q')){
        rl.close()
    }
});


rl.on('close', function () {

    const numberOfBitmaps: number = parseInt(input[0])
    const testCases: string[][] = getTestCases(input)

    validateDataSize(numberOfBitmaps, testCases.length)

    testCases.forEach((eachCase: string[], testCaseIndex: number) => {
        const dimensions: Dimensions = getBitmapDimensions(eachCase[0])
        const pixelRows: string[] = eachCase.slice(1, dimensions.n+1)
        const finalDistanceArray: number[][] = getFinalDistanceArray(dimensions, pixelRows)
        console.log(`Distance Array for Test Case ${testCaseIndex+1}:\n${finalDistanceArray.map(row => row.join(" ")).join("\n")}\n`)
    })
    process.exit(0);

});






