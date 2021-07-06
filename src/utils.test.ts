import { getFinalDistanceArray, getTestCases, validateDataSize } from './utils';

test('getFinalDistanceArray - returns 2d array containing shortest distances from each pixel to a white pixel.', () => {
    const dimensions = {n: 3, m: 4}
    const pixelRows = ['0001', '0011', '0110']
    const expectedFinalDistanceArray = [[3,2,1,0 ], [2,1,0,0], [1,0,0,1]]
    expect(getFinalDistanceArray(dimensions, pixelRows)).toEqual(expectedFinalDistanceArray);
});


test('getFinalDistanceArray - throws an error if the dimensions of the bitmap are incorrect.', () => {
    const dimensions = {n: 3, m: 4}
    const wrongSizedRow = '0011010101'
    const pixelRows = ['0001', wrongSizedRow, '0110']
    expect(() => getFinalDistanceArray(dimensions, pixelRows)).toThrow(Error(`Please check size of row: ${wrongSizedRow}. It must be of size ${dimensions.m}.`));
});


test('getTestCases - returns a 2d array containing each test case block.', () => {
    const inputData = ['2', '3 4', '0001', '0011', '0110', '', '2 3', '111', '010', 'q']
    const expectedTestCaseArray = [['3 4', '0001', '0011', '0110'], ['2 3', '111', '010']]
    expect(getTestCases(inputData)).toEqual(expectedTestCaseArray);
});


test('getTestCases - handles current and end indices correctly.', () => {
    const inputData = ['3', '3 4', '0001', '0011', '0110', '', '2 3', '111', '010', '', '4 5', '10011', '00001', '10010', '01010', 'q']
    const expectedTestCaseArray = [['3 4', '0001', '0011', '0110'], ['2 3', '111', '010'], ['4 5', '10011', '00001', '10010', '01010']]
    expect(getTestCases(inputData)).toEqual(expectedTestCaseArray);
});


test('validateDataSize - returns True if the number of bitmaps matches the actual number of test cases and 1 <= n <= 1000.', () => {
    const numberOfBitmaps = 3
    const numberOfTestCases = 3
    const expectedValidation = true
    expect(validateDataSize(numberOfBitmaps, numberOfTestCases)).toEqual(expectedValidation)

});


test('validateDataSize - returns False if the number of bitmaps does not match the actual number of test cases.', () => {
    const numberOfBitmaps = 3
    const numberOfTestCases = 4
    const expectedValidation = false
    expect(validateDataSize(numberOfBitmaps, numberOfTestCases)).toEqual(expectedValidation)

});


test('validateDataSize - returns False if the number of bitmaps and the actual number of test cases exceed 1000.', () => {
    const numberOfBitmaps = 1003
    const numberOfTestCases = 1003
    const expectedValidation = false
    expect(validateDataSize(numberOfBitmaps, numberOfTestCases)).toEqual(expectedValidation)

});

