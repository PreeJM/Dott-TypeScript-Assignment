# Dott Node.js/TypeScript Backend Assignment

## Task

There is given a rectangular bitmap of size n x m. Each pixel of the bitmap is either white or
black, but at least one is white. 

The pixel in i-th line and j-th column is called the pixel(i,j). 

The distance between two pixels p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|.

Write a program which:

● reads the description of the bitmap from the standard input

● for each pixel, computes the distance to the nearest white

● writes the results to the standard output

## Prerequisites

You must have [Node.js](https://nodejs.org/en/) and [TypeScript](https://www.typescriptlang.org/) installed.


## Setup & Run

Get this code by cloning this repository or download it using:

```
git clone https://github.com/PreeJM/Dott-TypeScript-Assignment
```

Once the code has been downloaded, open a terminal in the project directory, and install all the dependencies using:

```
npm install
```

Run the program using:

```
npm run dev
```

Run the tests using:

```
npm run test
```


## Input

The first line of the input contains the number of test cases t.

Then follow the t test cases, each separated by an empty line.

The first line of each test case has a pair of integer numbers n, m separated by a single space . 

Each of the following n lines of the test case contains exactly one word of length m, consisting only of zeros and/or ones.

If a pixel(i,j) is white, then at the j-th position in the line (i+1), 1 <= i <= n, 1 <= j <= m, the value will be '1'.

Black pixels are represented by a value of '0'.

***Note: To run this program correctly, at the console prompt, please paste your input data block and then press 'Enter' followed by the lowercase letter 'q'.***

#### Example Input
```
2         
4 5       
10011    
00001
10010
01010

2 3       
111
010
```
Ater pasting this data at the console prompt, please press 'Enter' and then 'q'.


## Limitations

The number of test cases t must be in the range of (1≤t≤1000).

The row size n and column size m must be in the ranges of (1 <= n <= 182) and (1 <= m <=182).


## Output

At each pixel(i,j) position, there should be an integer f(i,j) which represents the distance from the pixel to the nearest white pixel. These must be separated by single spaces.

The program reads the input data, then separates it into the individual test cases. 

Then a 2D array is created of each test case to represent the bitmap, along with a list of the positions of all the white pixels present in the bitmap.

The 2D array is traversed and the distance from the current pixel to each white pixel in the list is calculated and the minimum of all these distances is entered into the output 2D array at the same position as the current pixel. This output 2D array is then written to the standard input.

#### Example Output

```
Distance Array for Bitmap/Testcase 1:
0 1 1 0 0
1 2 2 1 0
0 1 1 0 1
1 0 1 0 1

Distance Array for Bitmap/Testcase 2:
0 0 0
1 0 1
```

