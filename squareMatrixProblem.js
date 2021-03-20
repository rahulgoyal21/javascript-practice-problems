let mat = [
    [1,1,0,1,0],
    [1,1,1,1,1],
    [0,0,1,1,1],
    [0,0,1,1,1],
    [1,1,0,0,0]
]

function largetSquareMat(mat){
    let rows = mat.length;
    let columns = mat[0].length;
    let count = [];
    console.log("ROWS AND COLUMNS ARE:",rows,columns,mat);
    
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
           if(mat[r][c] === 1){
               let drow = r; let dcol = c;let rCount = cCount = dCount=0;
               console.log("drow....dcol....r....c...rCount",drow,dcol,r,c,rCount,mat[drow][c])
               debugger

               //for rows
               while(mat[drow][c] === 1 && c < columns && drow < rows){
                   console.log("Entered row")
                   rCount++;
                   ++drow;
               }
               
               //for columns
               while(mat[r][dcol] === 1 && r < rows && dcol < columns){
                console.log("Entered column")
                    cCount++;
                    ++dcol;
               }
               
               //for diagonal
               drow = r, dcol = c;
               while(mat[drow][dcol] === 1 && dCount !== rCount){
                console.log("Entered diagonal")
                    dCount++;
                    drow++;dcol++;
                }

                if(rCount === cCount && cCount === dCount)
                count.push(rCount)
           }
        }
    }

    console.log(count)
    
}

largetSquareMat(mat)