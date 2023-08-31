const btn = document.querySelectorAll("button");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const cont = document.getElementById("cont");

let player1_name = ''
let player2_name = ''

let player1_sym = ''
let player2_sym = ''

let playerTurn = ''

const first1 =document.getElementById("first1")
const second1 =document.getElementById("second1")

const first2 =document.getElementById("first2")
const second2 =document.getElementById("second2")

window.onload = function(){
    localStorage.clear()
}

name1.onchange = function(){
    if(name1.value !== ''){
        player1_name = name1.value
        check()
    }
};

name2.onchange = function(){
    if(name2.value !== ''){
        player2_name = name2.value
        check()
    }
};

btn[0].onclick=function(){
    btn[0].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[3].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[1].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    btn[2].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    player1_sym = 'X'
    player2_sym = 'O'
};


btn[1].onclick=function(){
    btn[1].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[2].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[0].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    btn[3].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    player1_sym = 'O'
    player2_sym = 'X'
};


btn[2].onclick=function(){
    btn[2].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[1].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[0].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    btn[3].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    player1_sym = 'O'
    player2_sym = 'X'
};
btn[3].onclick=function(){
    btn[0].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[3].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[1].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    btn[2].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    player1_sym = 'X'
    player2_sym = 'O'
};


first1.onclick = () =>{
    first1.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black border-yellow-200'
    second1.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black'
    first2.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black '
    second2.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black border-yellow-200'
    playerTurn = '0'
    check()
}


second1.onclick = () =>{
    first1.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black '
    second1.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black border-yellow-200'
    first2.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black border-yellow-200'
    second2.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black '
    playerTurn = '1'
    check()
}

first2.onclick = () =>{
    first1.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black '
    second1.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black border-yellow-200'
    first2.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black border-yellow-200'
    second2.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black'
    playerTurn = '1'
    check()
}

second2.onclick = () =>{
    first1.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black border-yellow-200'
    second1.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black '
    first2.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black '
    second2.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black border-yellow-200'
    playerTurn = '0'
    check()
}

const check = () =>{
    if(player1_name !== '' && player2_name !== '' && player1_sym !=='' && player2_sym !=='' && playerTurn !== '' ){
        cont.className = ''
        localStorage.setItem('player1',player1_name)
        localStorage.setItem('player2',player2_name)
        localStorage.setItem('sym1',player1_sym)
        localStorage.setItem('sym2',player2_sym)
        localStorage.setItem('turn',playerTurn)
    }
}
