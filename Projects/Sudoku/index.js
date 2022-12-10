let puzzle = [
    [ 8,9,5,   7,4,2,   1,3,6 ],
    [ 2,7,1,   9,6,3,   4,8,5 ],
    [ 4,6,3,   5,8,1,   7,9,2 ],

    [ 9,3,4,   6,1,7,   2,5,8 ],
    [ 5,1,7,   2,3,8,   9,6,4 ],
    [ 6,8,2,   4,5,9,   3,7,1 ],

    [ 1,5,9,   8,7,4,   6,2,3 ],
    [ 7,4,6,   3,2,5,   8,1,9 ],
    [ 3,2,8,   1,9,6,   5,4,7 ]
];

// const getrow = (arr, index) => {
//     const row = puzzle[8]
//     return row;
// };

// // console.log(getrow(puzzle, 8));

// const getColumn = (arr, colNum) => {
//     const columnArr = []
//     for(let i = 0; i < arr.length; i++) {
//         columnArr.push(arr[i][colNum]);
//     };
//     return columnArr;
// };

// const colum = getColumn(puzzle, 5);
// // console.log(colum);

// const getSection = (arr, x, y) => {

//     const columnArr = []
//     for(let i = 0; i < 3; i++) {
//         const subArr = puzzle[i].slice(0, 3);
//         columnArr.push(subArr);
//     };
//     return columnArr.flat();
// };
const getSection = (arr, x, y) => {

    const columnArr = []
    for(let i = 0; i < arr.length; i++) {
        const subArr = arr[i].slice(3, 6);
        console.log(subArr);
        columnArr.push(subArr);
    };
    return columnArr.flat();
};

const section = getSection(puzzle, 0, 2);
// console.log(section);