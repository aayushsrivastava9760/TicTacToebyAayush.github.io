const btn = document.querySelectorAll("button");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const cont = document.getElementById("cont");

let check = 0;

name1.onchange = function(){
    localStorage.setItem('player1',name1.value);
    check++;
    if(check>=3) cont.setAttribute('class','');
};

name2.onchange = function(){
    localStorage.setItem('player2',name2.value);
    check++;
    if(check>=3) cont.setAttribute('class','');
};

btn[0].onclick=function(){
    btn[0].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[3].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[1].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    btn[2].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    localStorage.setItem('sym1','X');
    localStorage.setItem('sym2','O');
    check++;
    if(check>=3) cont.setAttribute('class','');
};
btn[1].onclick=function(){
    btn[1].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[2].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[0].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    btn[3].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    localStorage.setItem('sym1','O');
    localStorage.setItem('sym2','X');
    check++;
    if(check>=3) cont.setAttribute('class','');
};
btn[2].onclick=function(){
    btn[2].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[1].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[0].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    btn[3].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    localStorage.setItem('sym1','O');
    localStorage.setItem('sym2','X');
    check++;
    if(check>=3) cont.setAttribute('class','');
};
btn[3].onclick=function(){
    btn[0].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[3].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-blue-700');
    btn[1].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    btn[2].setAttribute('class','text-white text-4xl p-2 font-semibold bg-green-500 w-16 border-4 border-black');
    localStorage.setItem('sym1','X');
    localStorage.setItem('sym2','O');
    check++;
    if(check>=3) cont.setAttribute('class','');
};

