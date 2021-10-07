//grid blocks const
const blocks = document.getElementsByClassName("inline-block w-24 h-24 px-8 py-7 shadow-lg rounded-lg bg-indigo-700 text-center text-4xl font-semibold border-4 border-black hover:bg-indigo-400");

//player names const
const para = document.querySelectorAll('h2');

para[0].textContent = localStorage.getItem('player1');
para[1].textContent = localStorage.getItem('player2');

//player symbols const
const sym1 = localStorage.getItem('sym1');
const sym2 = localStorage.getItem('sym2');

//turn teller const
const teller = document.querySelectorAll('h4');

//score board
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

//reset const 
const reset = document.getElementById("reset");

//variable for keeping track of turns
// let turn = localStorage.getItem('turn');
let turn =0;
//winning cases
const cases = "012345678036147258048246";

//variable to tell if we have got a winner or not
let win=0;


//giving value to turn on window loading
window.addEventListener('load',turnInit);

function turnInit(){
    if(turn==0){
        teller[0].setAttribute('class','text-3xl font-semibold pt-6 text-white');
        teller[1].setAttribute('class','text-3xl font-semibold pt-6 text-black');
    }
    else{
        teller[1].setAttribute('class','text-3xl font-semibold pt-6 text-white');
        teller[0].setAttribute('class','text-3xl font-semibold pt-6 text-black');
    }
}

//reset functionality
reset.onclick = function(){
    win=0;
    //turn=localStorage.getItem('turn');
    turn=0;
    teller[0].textContent = "Your Turn";
    teller[1].textContent = "Your Turn";

    if(turn==0){
        teller[0].setAttribute('class','text-3xl font-semibold pt-6 text-white');
        teller[1].setAttribute('class','text-3xl font-semibold pt-6 text-black');
    }
    else{
        teller[1].setAttribute('class','text-3xl font-semibold pt-6 text-white');
        teller[0].setAttribute('class','text-3xl font-semibold pt-6 text-black');
    }
    for(let i=0;i<blocks.length;i++){
        blocks[i].textContent ="";
        blocks[i].style.pointerEvents = 'auto';
    }
}


//checking winning cases
function check(){
    for(let i=0;i<cases.length;i+=3){
        if((blocks[Number(cases[i])].textContent === blocks[Number(cases[i+1])].textContent && blocks[Number(cases[i+1])].textContent === blocks[Number(cases[i+2])].textContent) && blocks[Number(cases[i])].textContent!=""){
            
            if(blocks[Number(cases[i])].textContent === sym1){
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
            if(blocks[i].textContent === sym1 || blocks[i].textContent === sym2) count++;
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
        blocks[0].textContent = sym1;
        
        turn=1;
    }
    else{
        blocks[0].textContent = sym2;
        turn=0;
    }
    blocks[0].style.pointerEvents = 'none';
    // console.log(localStorage.getItem('sym1'));
    // console.log(localStorage.getItem('sym2'));
    // console.log(sym1);
    // console.log(sym2);
    // console.log(turn);
    check();
});

//block 2
blocks[1].addEventListener('click',function(){
    if(turn===0){
        blocks[1].textContent = sym1;
        turn=1;
    }
    else{
        blocks[1].textContent = sym2;
        turn=0;
    }
    blocks[1].style.pointerEvents = 'none';
    check();
});

//block 3
blocks[2].addEventListener('click',function(){
    if(turn===0){
        blocks[2].textContent = sym1;
        turn=1;
    }
    else{
        blocks[2].textContent = sym2;
        turn=0;
    }
    blocks[2].style.pointerEvents = 'none';
    check();
});

//block 4
blocks[3].addEventListener('click',function(){
    if(turn===0){
        blocks[3].textContent = sym1;
        turn=1;
    }
    else{
        blocks[3].textContent = sym2;
        turn=0;
    }
    blocks[3].style.pointerEvents = 'none';
    check();
});

//block 5
blocks[4].addEventListener('click',function(){
    if(turn===0){
        blocks[4].textContent = sym1;
        turn=1;
    }
    else{
        blocks[4].textContent = sym2;
        turn=0;
    }
    blocks[4].style.pointerEvents = 'none';
    check();
});

//block 6
blocks[5].addEventListener('click',function(){
    if(turn===0){
        blocks[5].textContent = sym1;
        turn=1;
    }
    else{
        blocks[5].textContent = sym2;
        turn=0;
    }
    blocks[5].style.pointerEvents = 'none';
    check();
});

//block 7
blocks[6].addEventListener('click',function(){
    if(turn===0){
        blocks[6].textContent = sym1;
        turn=1;
    }
    else{
        blocks[6].textContent = sym2;
        turn=0;
    }
    blocks[6].style.pointerEvents = 'none';
    check();
});

//block 8
blocks[7].addEventListener('click',function(){
    if(turn===0){
        blocks[7].textContent = sym1;
        turn=1;
    }
    else{
        blocks[7].textContent = sym2;
        turn=0;
    }
    blocks[7].style.pointerEvents = 'none';
    check();
});

//block 9
blocks[8].addEventListener('click',function(){
    if(turn===0){
        blocks[8].textContent = sym1;
        turn=1;
    }
    else{
        blocks[8].textContent = sym2;
        turn=0;
    }
    blocks[8].style.pointerEvents = 'none';
    check();
});

