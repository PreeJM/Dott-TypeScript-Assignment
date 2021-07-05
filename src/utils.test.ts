import { getFinalDistanceArray, getTestCases } from './utils';

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