const html = document.querySelector('html');
const button = document.querySelector('.content button');
const tile = document.querySelector('.tile');

let overlay = document.querySelector('.overlay');

overlay.addEventListener('click', ()=>{
    overlay.classList.toggle('active');
    tile.style.display ="none";
});

button.addEventListener('click', () =>{
    openTile()
    console.log('hello')
});


function openTile(){
    tile.style.display ="flex";
    overlay.classList.toggle('active');
}



