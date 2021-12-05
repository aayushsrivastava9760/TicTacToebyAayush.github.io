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


const min = (a,b) =>{
    if(a>b) return b;
    else return a;
}

const max = (a,b) =>{
    if(a>b) return a;
    else return b;
}


const isMovesLeft = (block) =>{
	for (let i = 0; i<9; i++) if (block[i]==='') return true;
	return false;
}


const evaluate = (block) =>{
    for(let i=0;i<cases.length;i+=3){

		if(   (  (  block[Number(cases[i])]  ===  block[Number(cases[i+1])]     )    &&   (   block[Number(cases[i+1])] === block[Number(cases[i+2])]     )  )     &&      (block[Number(cases[i])]  !== ''  )      ){
			if(block[i] === botSym) return +10;
			else if(block[i] === playerSym) return -10;
		}

	}

    return 0;
}


const minimax = (block,depth,isMax) =>{
    let score = evaluate(block);

	// evaluated score
	if (score === 10)
		return score;

	// If Minimizer has won the game return his/her
	// evaluated score
	if (score === -10)
		return score;

	// If there are no more moves and no winner then
	// it is a tie
	if (isMovesLeft(block)===false)
		return 0;

	// If this maximizer's move
	if (isMax)
	{
		let best = -1000;

		// Traverse all cells
		for (let i = 0; i<9; i++)
		{
			
				// Check if cell is empty
				if (block[i]==='')
				{
					// Make the move
					block[i] = botSym;

					// Call minimax recursively and choose
					// the maximum value
					best = max( best,
						minimax(block, depth+1, !isMax) );

					// Undo the move
					block[i] = '';
				}
			
		}
		return best;
	}

	// If this minimizer's move
	else
	{
		let best = 1000;

		// Traverse all cells
		for (let i = 0; i<9; i++)
		{
			
				// Check if cell is empty
				if (block[i]=='')
				{
					// Make the move
					block[i] = playerSym;

					// Call minimax recursively and choose
					// the minimum value
					best = min(best,
						minimax(block, depth+1, !isMax));

					// Undo the move
					block[i] = '';
				}
			
		}
		return best;
	}
}


const findBestMove = (block) =>{

    let bestVal = -1000
    let bestMove = -1

    for(let i=0;i<9;i++){
        if (block[i]=='')
			{
				// Make the move
				block[i] = botSym;

				// compute evaluation function for this
				// move.
				let moveVal = minimax(block, 0, false);

				// Undo the move
				block[i] = '';

				// If the value of the current move is
				// more than the best value, then update
				// best/
				if (moveVal > bestVal)
				{
					bestMove = i;
					bestVal = moveVal;
				}
			}
    }

    return bestMove;
}


function botTurn(){
    
    let block = [
        blocks[0].textContent ,
        blocks[1].textContent ,
        blocks[2].textContent ,
        blocks[3].textContent ,
        blocks[4].textContent ,
        blocks[5].textContent ,
        blocks[6].textContent ,
        blocks[7].textContent ,
        blocks[8].textContent 
    ]
    
    let bestMove = findBestMove(block)
    console.log(bestMove);
    blocks[bestMove].textContent = botSym
    turn=0;
    check()
}

