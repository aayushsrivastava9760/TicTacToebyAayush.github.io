//grid blocks const
const blocks = document.getElementsByClassName("inline-block w-24 h-24 px-8 py-7 shadow-lg rounded-lg bg-indigo-700 text-center text-4xl font-semibold border-4 border-black hover:bg-indigo-400");

//player names const
const para = document.querySelectorAll('h2');

para[0].textContent = localStorage.getItem('PlayerName');

const playerSym = localStorage.getItem('PlayerSymbol');

const botSym = playerSym === 'X' ? 'O' : 'X';

let turn = localStorage.getItem('PlayerTurn')==='first' ? 0 : 1

const teller = document.querySelectorAll('h4');

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

//winning cases
const cases = "012345678036147258048246";

//variable to tell if we have got a winner or not
let win=0;

//giving value to turn on window loading
window.addEventListener('load',turnInit);

function turnInit(){
    if(turn===0){
        teller[0].setAttribute('class','text-3xl font-semibold pt-6 text-white');
        teller[1].setAttribute('class','text-3xl font-semibold pt-6 text-black');
    }
    else{
        botTurn();
    }
}


//checking winning cases
function check(){
    for(let i=0;i<cases.length;i+=3){
        if((blocks[Number(cases[i])].textContent === blocks[Number(cases[i+1])].textContent && blocks[Number(cases[i+1])].textContent === blocks[Number(cases[i+2])].textContent) && blocks[Number(cases[i])].textContent!=""){
            
            if(blocks[Number(cases[i])].textContent === playerSym){
                teller[0].textContent = "WINNER!!";
                score1.textContent = parseInt(score1.textContent)+1;
            }
            else{
                teller[1].textContent = "WINNER!!";
                score2.textContent = parseInt(score2.textContent)+1;
            }
            win=1;
            for(let j=0;j<blocks.length;j++){
                blocks[j].style.pointerEvents = 'none';
            }
            break;
        }
    }
    
    if(win!=1){
        let count=0;
        for(let i=0;i<9;i++){
            if(blocks[i].textContent === playerSym || blocks[i].textContent === botSym) count++;
        }
        if(count===9){
            teller[0].setAttribute('class','text-3xl font-semibold pt-6 text-white');
            teller[1].setAttribute('class','text-3xl font-semibold pt-6 text-white');
            teller[0].textContent = "TIE!!!!!!!";
            teller[1].textContent = "TIE!!!!!!!";
        }
    
        if(count!=9){
            if(turn==0){
                teller[0].setAttribute('class','text-3xl font-semibold pt-6 text-white');
                teller[1].setAttribute('class','text-3xl font-semibold pt-6 text-black');
            }
            else{
                teller[1].setAttribute('class','text-3xl font-semibold pt-6 text-white');
                teller[0].setAttribute('class','text-3xl font-semibold pt-6 text-black');
            }
        }
    }
}

//block 1
blocks[0].addEventListener('click',function(){
    if(turn===0){
        blocks[0].textContent = playerSym;
        
        turn=1;
    }
    blocks[0].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});

//block 2
blocks[1].addEventListener('click',function(){
    if(turn===0){
        blocks[1].textContent = playerSym;
        
        turn=1;
    }
    blocks[1].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});

//block 3
blocks[2].addEventListener('click',function(){
    if(turn===0){
        blocks[2].textContent = playerSym;
        
        turn=1;
    }
    blocks[2].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});

//block 4
blocks[3].addEventListener('click',function(){
    if(turn===0){
        blocks[3].textContent = playerSym;
        
        turn=1;
    }
    blocks[3].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});

//block 5
blocks[4].addEventListener('click',function(){
    if(turn===0){
        blocks[4].textContent = playerSym;
        
        turn=1;
    }
    blocks[4].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});

//block 6
blocks[5].addEventListener('click',function(){
    if(turn===0){
        blocks[5].textContent = playerSym;
        
        turn=1;
    }
    blocks[5].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});

//block 7
blocks[6].addEventListener('click',function(){
    if(turn===0){
        blocks[6].textContent = playerSym;
        
        turn=1;
    }
    blocks[6].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});

//block 8
blocks[7].addEventListener('click',function(){
    if(turn===0){
        blocks[7].textContent = playerSym;
        
        turn=1;
    }
    blocks[7].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});

//block 9
blocks[8].addEventListener('click',function(){
    if(turn===0){
        blocks[8].textContent = playerSym;
        
        turn=1;
    }
    blocks[8].style.pointerEvents = 'none';
    check();
    if(win===0){
        botTurn();
    }
});




const emptyBoxes = (board) =>{
    return board.filter(box => box !== 'X' && box !== 'O')
}


const winning = (board,player) =>{
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
        ) {
        return true;
        } else {
        return false;
    }
}

const minimax = (newBoard,player) =>{
    let availBoxes = emptyBoxes(newBoard)

    if(winning(newBoard,playerSym)) return {score:-10}
    else if(winning(newBoard,botSym)) return {score:+10}
    else if(availBoxes.length === 0) return {score:0}

    let moves = []

    for(let i=0;i<availBoxes.length;i++){
        let move ={}
        move.index = newBoard[availBoxes[i]];

    
        newBoard[availBoxes[i]] = player;

    
        if (player == botSym){
        let result = minimax(newBoard, playerSym);
        move.score = result.score;
        }
        else{
        let result = minimax(newBoard, botSym);
        move.score = result.score;
        }

        newBoard[availBoxes[i]] = move.index;
    
        moves.push(move);
    }

    let bestMove;
  if(player === botSym){
    let bestScore = -10000;
    for(let i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{


    let bestScore = 10000;
    for(let i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];

}


const botTurn = () =>{
    let board = [0,1,2,3,4,5,6,7,8]

    for(let i=0;i<9;i++){
        if(blocks[i].textContent !== '') board[i] = blocks[i].textContent
    }

    let bestSpot = minimax(board,botSym).index
    console.log(bestSpot);

    blocks[bestSpot].textContent = botSym
    turn=0;
    check()

}

