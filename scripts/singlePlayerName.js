const player = document.getElementById("name")
let playerName=''
let playerSymbol='';
let playerTurn ='';

const symX = document.getElementById("symbol X")
const symO = document.getElementById("symbol O")

const first =document.getElementById("first")
const second =document.getElementById("second")

const cont = document.getElementById("cont")

player.onchange = ()=>{
    if(player.value !== ''){
        playerName = player.value
        check()
    }
}

symX.onclick = () =>{
    symX.className = 'text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black hover:border-blue-500 border-blue-700'
    symO.className = 'text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black hover:border-blue-500'
    playerSymbol = 'X'
    check()
}

symO.onclick = () =>{
    symX.className = 'text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black hover:border-blue-500'
    symO.className = 'text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black hover:border-blue-500 border-blue-700'
    playerSymbol = 'O'
    check()
}

first.onclick = () =>{
    first.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black border-yellow-200'
    second.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black'
    playerTurn='first'
    check()
}

second.onclick = () =>{
    first.className = 'text-white text-4xl p-2 font-semibold bg-red-500 w-36 hover:bg-red-400 border-4 border-black '
    second.className = 'text-white text-4xl p-2 font-semibold bg-blue-500 w-36 hover:bg-blue-400 border-4 border-black border-yellow-200'
    playerTurn = 'second'
    check()
}


function check (){
    if(playerName !== '' && playerSymbol !=='' && playerTurn !== ''){
        cont.className = ''
        localStorage.setItem('PlayerName',playerName)
        localStorage.setItem('PlayerSymbol',playerSymbol)
        localStorage.setItem('PlayerTurn',playerTurn)
    }
}
