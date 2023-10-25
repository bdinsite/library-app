// LIBRARY - LIST OF BOOKS
const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishYear: 1925,
      pages: 180,
      category: "Classic",
      availability: "available"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishYear: 1960,
      pages: 281,
      category: "Fiction",
      availability: "available"
    },
    {
      title: "1984",
      author: "George Orwell",
      publishYear: 1949,
      pages: 328,
      category: "Dystopian",
      availability: "available"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publishYear: 1937,
      pages: 310,
      category: "Fantasy",
      availability: "available"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishYear: 1951,
      pages: 224,
      category: "Coming of Age",
      availability: "available"
    },
    {
        title: "Last Summer",
        author: "Jane Tyle",
        publishYear: 2020,
        pages: 300,
        category: "Romance",
        availability: "available"
    },
    {
        title: "How to Lose Millions",
        author: "Gene Ious",
        publishYear: 2015,
        pages: 250,
        category: "Non-fiction",
        availability: "available"
    },
    {
        title: "My First Tooth",
        author: "Paul Reed",
        publishYear: 2005,
        pages: 578,
        category: "Non-fiction",
        availability: "available"
    },
    {
        title: "How to Find a Girl When You're Broke",
        author: "Kenneth Lint",
        publishYear: 2022,
        pages: 2,
        category: "Non-fiction",
        availability: "available"
    },
    {
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

        title.textContent = item.title;
        author.textContent = item.author;
        category.textContent = item.category;
        published.textContent = item.publishYear;
        pages.textContent = item.pages;

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(category);
        book.appendChild(published);
        book.appendChild(pages);
        borrowedBooks.appendChild(book);
    })
}