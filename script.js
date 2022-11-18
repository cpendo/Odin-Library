const html = document.querySelector('html');
const addButton = document.querySelector('.content button');
const tile = document.querySelector('.tile');

let overlay = document.querySelector('.overlay');

overlay.addEventListener('click', ()=>{
    overlay.classList.remove('active');
    tile.style.display ="none";
});

addButton.addEventListener('click',  openTile);

function openTile(){
    tile.style.display ="flex";
    overlay.classList.add('active');
}

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookStatus = document.querySelector('#status')
const submitButton = document.querySelector('.tile button');
const grid = document.querySelector('.grid');

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    getInput();
    tile.style.display ="none";
    overlay.classList.remove('active');
} );

let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
};

function addBookToLibrary(title, author, pages, status){
    myLibrary.push(new Book(title, author, pages, status));
}

const buttonText = () =>{
    bookStatus.checked == true ?  bookStatus.value = 'read' : bookStatus.value = 'not read yet';
    return bookStatus.value;
} 

function bookCard(){
    let div = document.createElement('div');
    div.classList.add('grid-item');

    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let status = document.createElement('button');
    let remove = document.createElement('button');
    remove.classList.add('remove'); 

    title.textContent = `"${bookTitle.value}"`;
    author.textContent = bookAuthor.value;
    pages.textContent = `${bookPages.value} pages`;
    status.textContent = buttonText();
    remove.textContent = 'remove';

    let color;
    bookStatus.checked == true ?  color = "#90EE90" : color = "#FFCCCB";
    status.style.backgroundColor = color;

    status.addEventListener('click', () =>{  // ensure the change effects in the array
        if (status.textContent == 'read'){
            status.textContent = 'not read yet'
            status.style.backgroundColor = "#FFCCCB";
        } else {
            status.textContent = 'read';
            status.style.backgroundColor = "#90EE90";
        }    
    });
    
    remove.addEventListener('click', () =>{  // ensure the change effects in the array
        grid.removeChild(div);
        console.log(myLibrary)
    });

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(status);
    div.appendChild(remove);

    grid.appendChild(div); 
}

function getInput(){
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let status = buttonText();

    bookCard();
    addBookToLibrary(title, author, pages, status);
    console.log(myLibrary);
}

const updateBooksGrid = () => {
    resetBooksGrid()
    myLibrary.forEach(book =>{ bookCard(book)});
};

const resetBooksGrid = () => {
    grid.innerHTML = ''
}


