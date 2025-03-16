//sudoku


function isValid(board,row,col,num){
    for(let i=0;i<9;i++){
        if(board[row][i]===num || board[i][col]===num || board[3*Math.floor(row/3)+ Math.floor(i/3)][3*Math.floor(col/3)+i%3]===num) return false;
    }
    return true;
}

function sudoku(board){
    for(let row=0;row<9;row++){
        for(let col=0;col<9;col++){
            if(board[row][col]===0){
                for(let num=1;num<=9;num++){
                    if(isValid(board,row,col,num)){
                        board[row][col]=num;
                        if(sudoku(board)) return true; // recursively calls the the board to solve
                        board[row][col]=0; // backtrck if not solved
                    }     
                }
                return false;
            }      
        }    
    }
    return true;   
}

let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

sudoku(board)
console.log(board);