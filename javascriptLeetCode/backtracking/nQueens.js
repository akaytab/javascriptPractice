// N-queens problem


function nQueens(n){
    const solutions=[]
    const board = Array.from({length:n},()=>Array(n).fill('.'));

    function isSafe(row,col){
        // check column wise
        for(let i=0;i<row;i++){
            if(board[i][col]=== 'Q') return false
        }
        //check diagonal
        for(let i=row , j=col ; i>=0 && j>=0 ; i--,j--){
            if(board[i][j]=== 'Q') return false;
        }
        //check anti digonal
        for(let i=row,j=col ; i>=0 && j<n; i--,j++){
            if(board[i][j]==='Q') return false;
        }
        return true;
    }

    function placeQueens(row){
        //basecase
        if(row===n){
            solutions.push(board.map(row=>row.join(' ')))
            return
        }

        //actual sol if row not equals to n
        for(let col=0;col<n;col++){
            if(isSafe(row,col)){
                board[row][col]='Q'
                placeQueens(row+1)
                //backtrack
                board[row][col]='.'
            }
        }
    }
    placeQueens(0)
    return solutions

}

console.log(nQueens(4));
