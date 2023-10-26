// LIBRARY - LIST OF BOOKS
const books = [
    {
        bookId: 100,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishYear: 1925,
        pages: 180,
        category: "Classic",
        availability: "available"
    },
    {
        bookId: 101,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishYear: 1960,
        pages: 281,
        category: "Fiction",
        availability: "available"
    },
    {
        bookId: 102,
        title: "1984",
        author: "George Orwell",
        publishYear: 1949,
        pages: 328,
        category: "Dystopian",
        availability: "available"
    },
    {
        bookId: 103,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publishYear: 1937,
        pages: 310,
        category: "Fantasy",
        availability: "available"
    },
    {
        bookId: 104,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishYear: 1951,
        pages: 224,
        category: "Coming of Age",
        availability: "available"
    },
    {
        bookId: 105,
        title: "Last Summer",
        author: "Jane Tyle",
        publishYear: 2020,
        pages: 300,
        category: "Romance",
        availability: "available"
    },
    {
        bookId: 106,
        title: "How to Lose Millions",
        author: "Gene Ious",
        publishYear: 2015,
        pages: 250,
        category: "Non-fiction",
        availability: "available"
    },
    {
        bookId: 107,
        title: "My First Tooth",
        author: "Paul Reed",
        publishYear: 2005,
        pages: 578,
        category: "Non-fiction",
        availability: "available"
    },
    {
        bookId: 108,
        title: "How to Find a Girl When You're Broke",
        author: "Kenneth Lint",
        publishYear: 2022,
        pages: 2,
        category: "Non-fiction",
        availability: "available"
    },
    {
        bookId: 109,
        title: "Just Found Dust Under the Bed",
        author: "Karen Nitpick",
        publishYear: 1988,
        pages: 895,
        category: "Horror",
        availability: "available"
    }

];

let search = [];
let result = [];
let borrowed = [];

let title = document.querySelector('#title');
let author = document.querySelector('#author');
let category = document.querySelector('#category');
let publishYear = document.querySelector('#publishYear');
let pages = document.querySelector('#pages');
let btn = document.querySelector('#btn');
let reset = document.querySelector('#reset');
let ol = document.querySelector('.searchResult ol');

const borrowedBooks = document.querySelector('.myBooks ol');
let input = document.querySelectorAll('input');

btn.addEventListener('click', searchBook);
reset.addEventListener('click', resetForm);

// RESET FORM AND RESULT FIELD
function resetForm(){
    const child = document.querySelectorAll('.bookList li');
    if(child){
        child.forEach(item => item.remove());
    } // li's removed in between -> no duplicates
    input.forEach((input) => {
        input.value = "";
    })
}

// ADD NULL TO FIELDS THAT AREN'T FILLED IN, AS "" WILL MEET ALL CRITERIA IN "includes()"
function searchBook(){
    search = []; // Reset search array
    result = []; // Reset search result object
    
    if(ol.hasChildNodes()){ol.removeChild(ol.children[0])} // Remove list in case of search re-run so that result list gets cleared in between
    if(title.value == ""){search.push(null)} else{search.push(title.value)};
    if(author.value == ""){search.push(null)} else{search.push(author.value)};
    if(category.value == ""){search.push(null)} else{search.push(category.value)};
    search.push(Number(publishYear.value));
    search.push(Number(pages.value));
    console.log(search);

    for (let i = 0; i < books.length; i++){
        let searchResult = document.querySelector('.bookList');
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let button = document.createElement('button');
        // button.id = 'borrow';

        if(search[0] != null && books[i].title.toLowerCase().includes(search[0].toLowerCase())){
            h4.textContent = "Title: " + books[i].title;
            p1.textContent = "Author: " + books[i].author;
            p2.textContent = "Category: " + books[i].category;
            p3.textContent = "Published: " + books[i].publishYear;
            p4.textContent = "Pages: " + books[i].pages;
            p5.textContent = "Availability: " + books[i].availability;
            button.textContent = "Borrow";
            button.classList.add(i); // Index number in button -class (to use when clicking borrow-button)
            if(books[i].availability !== "available"){
                button.disabled = true;
                button.style.backgroundColor = "#f4f4f5";
                p5.style.color = "red";
            } else {
                p5.style.color = "green";
            }

            li.appendChild(h4);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(p4);
            li.appendChild(p5);
            /* li.appendChild(p6); */
            li.appendChild(button);

            searchResult.appendChild(li);

            result.push(books[i]);

        } else if(search[1] != null && books[i].author.toLowerCase().includes(search[1].toLowerCase())){
            h4.textContent = "Title: " + books[i].title;
            p1.textContent = "Author: " + books[i].author;
            p2.textContent = "Category: " + books[i].category;
            p3.textContent = "Published: " + books[i].publishYear;
            p4.textContent = "Pages: " + books[i].pages;
            p5.textContent = "Availability: " + books[i].availability;
            button.textContent = "Borrow";
            button.classList.add(i); // Index number in button -class (to use when clicking borrow-button)
            if(books[i].availability !== "available"){
                button.disabled = true;
                button.style.backgroundColor = "#f4f4f5";
                p5.style.color = "red";
            } else {
                p5.style.color = "green";
            }

            li.appendChild(h4);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(p4);
            li.appendChild(p5);
            li.appendChild(button);

            searchResult.appendChild(li);

            result.push(books[i]);

        } else if(search[2] != null && books[i].category.toLowerCase().includes(search[2].toLowerCase())){
            h4.textContent = "Title: " + books[i].title;
            p1.textContent = "Author: " + books[i].author;
            p2.textContent = "Category: " + books[i].category;
            p3.textContent = "Published: " + books[i].publishYear;
            p4.textContent = "Pages: " + books[i].pages;
            p5.textContent = "Availability: " + books[i].availability;
            button.textContent = "Borrow";
            button.classList.add(i); // Index number in button -class (to use when clicking borrow-button)
            if(books[i].availability !== "available"){
                button.disabled = true;
                button.style.backgroundColor = "#f4f4f5";
                p5.style.color = "red";
            } else {
                p5.style.color = "green";
            }

            li.appendChild(h4);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(p4);
            li.appendChild(p5);
            li.appendChild(button);

            searchResult.appendChild(li);

            result.push(books[i]);

        } else if(books[i].publishYear === search[3]){
            h4.textContent = "Title: " + books[i].title;
            p1.textContent = "Author: " + books[i].author;
            p2.textContent = "Category: " + books[i].category;
            p3.textContent = "Published: " + books[i].publishYear;
            p4.textContent = "Pages: " + books[i].pages;
            p5.textContent = "Availability: " + books[i].availability;
            button.textContent = "Borrow";
            button.classList.add(i); // Index number in button -class (to use when clicking borrow-button)
            if(books[i].availability !== "available"){
                button.disabled = true;
                button.style.backgroundColor = "#f4f4f5";
                p5.style.color = "red";
            } else {
                p5.style.color = "green";
            }

            li.appendChild(h4);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(p4);
            li.appendChild(p5);
            li.appendChild(button);

            searchResult.appendChild(li);

            result.push(books[i]);

        } else if(books[i].pages === search[4]){
            h4.textContent = "Title: " + books[i].title;
            p1.textContent = "Author: " + books[i].author;
            p2.textContent = "Category: " + books[i].category;
            p3.textContent = "Published: " + books[i].publishYear;
            p4.textContent = "Pages: " + books[i].pages;
            p5.textContent = "Availability: " + books[i].availability;
            button.textContent = "Borrow";
            button.classList.add(i); // Index number in button -class (to use when clicking borrow-button)
            if(books[i].availability !== "available"){
                button.disabled = true;
                button.style.backgroundColor = "#f4f4f5";
                p5.style.color = "red";
            } else {
                p5.style.color = "green";
            }

            li.appendChild(h4);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(p4);
            li.appendChild(p5);
            li.appendChild(button);

            searchResult.appendChild(li);

            result.push(books[i]);            
        }
    }

    // BORROW BOOK -> ADD TO "borrowed" ARRAY
    const button = document.querySelectorAll('.bookList li button');

    button.forEach(item => {item.addEventListener('click', addBooks)});

    function addBooks(evt){
        let index = borrowed.length-1;
        borrowed.push(books[evt.target.classList.value]);
        books[evt.target.classList.value].availability = "unavailable";
        checkoutBook();
    }
}

// UPDATE MY_LIBRARY LIST
function checkoutBook() {
    const child = document.querySelectorAll('.borrowed li');
    if(child){
        child.forEach(item => item.remove());
    } // li's removed in between -> no duplicates
    borrowed.forEach(item => {
        const book = document.createElement('li');
        const title = document.createElement('h4');
        const author = document.createElement('p');
        const category = document.createElement('p');
        const published = document.createElement('p');
        const pages = document.createElement('p');
        const button = document.createElement('button');

        title.textContent = 'Title: ' + item.title;
        author.textContent = 'Author: ' + item.author;
        category.textContent = 'Category: ' + item.category;
        published.textContent = 'Published: ' + item.publishYear;
        pages.textContent = 'Pages: ' + item.pages;

        button.id = item.bookId;
        button.textContent = 'Return Book';
        
        book.style.fontSize = '14px';
        book.style.paddingTop = '20px';

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(category);
        book.appendChild(published);
        book.appendChild(pages);
        book.appendChild(button);
        borrowedBooks.appendChild(book);
    });

    // RETURN BOOK
    const button = document.querySelectorAll('.borrowed li button');

    button.forEach(item => item.addEventListener('click', returnBook));

    function returnBook(evt) {
        // Change book status in books array
        let searchResult = books.filter(item => item.bookId === Number(evt.target.id));
        searchResult[0].availability = 'available';

        // Remove returned book from borrowed array and from My Library list
        let myBooks = borrowed.filter(item => item.bookId !== Number(evt.target.id));
        borrowed = myBooks;
        evt.target.parentElement.remove();
        

    }
    
}

// ADD NEW BOOK TO LIBRARY

// Open form
const addBookButton = document.querySelector('.addBook button');
addBookButton.addEventListener('click', openForm);

function openForm() {
    const grabForm = document.querySelector('.newBook');
    grabForm.classList.add('visible');
}

// Send form data
const sendData = document.querySelector('#addBook');
sendData.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
    const grabForm = document.querySelector('.newBook');

    let title = document.querySelector('.addBookForm #title');
    let author = document.querySelector('.addBookForm #author');
    let category = document.querySelector('.addBookForm #category');
    let publishYear = document.querySelector('.addBookForm #publishYear');
    let pages = document.querySelector('.addBookForm #pages');
    let bookId = books.length + 100;

    if(title.value || author.value || category.value || publishYear.value || pages.value){
        books.push({
            bookId: bookId,
            title: title.value,
            author: author.value,
            category: category.value,
            publishYear: publishYear.value,
            pages: pages.value,
            availability: 'available',
        });
    
        resetForm();
    }
    

    grabForm.classList.remove('visible');
}


// SHOW BORROWED BOOKS

const menuIcon = document.querySelector('.hiddenBooks img');
const grabDiv = document.querySelector('.myBooks');

menuIcon.addEventListener('click', showBorrowedBooks);

function showBorrowedBooks() {
    if(grabDiv.classList.contains('showMyBooks')) {
        grabDiv.classList.remove('showMyBooks');
    } else {
        grabDiv.classList.add('showMyBooks');
    }
}