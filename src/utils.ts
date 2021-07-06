export interface Dimensions {
    n: number
    m: number
}


interface PixelPosition {
    i: number
    j: number
}


export const getBitmapDimensions = (dimensionLine: string): Dimensions => {
   
    const dimensions = dimensionLine.split(" ")
    const n: number = parseInt(dimensions[0])
    const m: number = parseInt(dimensions[1])
    if(n < 1 || n > 182 || m < 1 || m > 182){
        throw new Error(`Please check dimensions of the bitmap. They must be >= 1 and <= 182.`)
    }
    return {n, m}

}


const createDistanceToWhitePixelsList = (whitePixelList: PixelPosition[], rowIndex: number, columnIndex: number): number[] => {
    
    const distanceList: number[] = []
    whitePixelList.forEach((whitePixelPosition: PixelPosition) => {
        const distance: number = Math.abs(whitePixelPosition.i - rowIndex) + Math.abs(whitePixelPosition.j - columnIndex)
        distanceList.push(distance)
    })
    return distanceList

}


const createDistanceArray = (pixelArray: string[][], whitePixelList: PixelPosition[]): number[][] => {

    const distanceArray: number[][] = []
    pixelArray.forEach((row: string[], rowIndex:  number) => {
        const distanceArrayRow: number[] = []
        row.forEach((column: string, columnIndex: number) => {
            if(column === '0'){
                const minDistance = Math.min( ...createDistanceToWhitePixelsList(whitePixelList, rowIndex, columnIndex))
                distanceArrayRow.push(minDistance)
            }
            else{
                distanceArrayRow.push(0)
            }
        })
        distanceArray.push(distanceArrayRow)
    })
    return distanceArray

}


export const getTestCases = (input: string[]): string[][] => {
    const testCases: string[][] = []
    let currentIndex = 1
    while(currentIndex < input.length){
        const endIndex = input.indexOf('', currentIndex)||input.length
        const eachTestCase = input.slice(currentIndex, endIndex)
        if(eachTestCase.length){
            testCases.push(eachTestCase)
        }
        // currentIndex += endIndex
        currentIndex = endIndex === -1 ? input.length : endIndex + 1
    }
    return testCases
}


export const validateDataSize = (numberOfBitmaps: number, numberOfTestCases: number): boolean => {
    return numberOfBitmaps === numberOfTestCases && numberOfTestCases > 0 && numberOfTestCases <= 1000
}


export const getFinalDistanceArray = (dimensions: Dimensions, pixelRows: string[]): number[][] => {

    const whitePixelList: PixelPosition[] = []
    const pixelArray: string[][] = []

    pixelRows.forEach((row: string, rowIndex: number) => {
        if(row.length > dimensions.m){
            throw new Error(`Please check size of row: ${row}. It must be of size ${dimensions.m}.`)
        }
        const splitRow: string[] = Array.from(row);
        pixelArray.push(splitRow)

        splitRow.forEach((column: string, columnIndex: number) => {
            if(column === '1'){
                whitePixelList.push({i: rowIndex, j: columnIndex})
            }
        })
    })

    return createDistanceArray(pixelArray, whitePixelList)
    
};