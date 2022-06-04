function clearCards() {

    const carddivs = document.querySelectorAll(".card");
    for(let carddiv of carddivs) {
        carddiv.remove();
    }
}

function createForm() {

    add.disabled = true;
    main.classList.add("darken");
    header.classList.add("darken");

    const form = document.createElement("form");
    form.setAttribute("action", "/signup");
    form.setAttribute("method", "post")
    form.classList.add("form");
    body.appendChild(form);


    const divname = document.createElement("div");
    divname.classList.add("formentry");
    form.appendChild(divname);
    const labelname = document.createElement("label");
    labelname.setAttribute("for", "bookname");
    labelname.textContent = "BOOK NAME:";
    divname.appendChild(labelname);
    const inputname = document.createElement("input");
    inputname.setAttribute("type", "text");
    inputname.setAttribute("name", "bookname");
    inputname.setAttribute("id", "bookname");
    inputname.setAttribute("placerholder", "Harry Potter");
    inputname.setAttribute("required", ""); 
    divname.appendChild(inputname);

    const divauthor = document.createElement("div");
    divauthor.classList.add("formentry");
    form.appendChild(divauthor);
    const labelauthor = document.createElement("label");
    labelauthor.setAttribute("for", "authorname");
    labelauthor.textContent = "AUTHOR'S NAME:";
    divauthor.appendChild(labelauthor);
    const inputauthor = document.createElement("input");
    inputauthor.setAttribute("type", "text");
    inputauthor.setAttribute("name", "authorname");
    inputauthor.setAttribute("id", "authorname");
    inputauthor.setAttribute("placerholder", "J.K Rowling");
    inputauthor.setAttribute("required", ""); 
    divauthor.appendChild(inputauthor);

    const divpage = document.createElement("div");
    divpage.classList.add("formentry");
    form.appendChild(divpage);
    const labelpage = document.createElement("label");
    labelpage.setAttribute("for", "pagenumber");
    labelpage.textContent = "PAGE COUNT:";
    divpage.appendChild(labelpage);
    const inputpage = document.createElement("input");
    inputpage.setAttribute("type", "number");
    inputpage.setAttribute("name", "pagenumber");
    inputpage.setAttribute("id", "pagenumber");
    inputpage.setAttribute("placerholder", "123");
    inputpage.setAttribute("required", "");
    divpage.appendChild(inputpage);

    const divread = document.createElement("div");
    divread.classList.add("formentryinline");
    form.appendChild(divread);
    const labelread = document.createElement("label");
    labelread.setAttribute("for", "readstatus");
    labelread.textContent = "HAVE YOU READ THE BOOK?";
    divread.appendChild(labelread);
    const inputread = document.createElement("input");
    inputread.setAttribute("type", "checkbox");
    inputread.setAttribute("name", "readstatus");
    inputread.setAttribute("id", "readstats");
    inputread.setAttribute("required", ""); 
    divread.appendChild(inputread);

    const divbutton = document.createElement("div");
    divbutton.classList.add("formbutton");
    form.appendChild(divbutton);
    const buttonbutton = document.createElement("button");
    buttonbutton.setAttribute("type", "button");
    buttonbutton.textContent = "ADD BOOK TO LIBRARY";
    buttonbutton.classList.add("confirmbook");
    divbutton.appendChild(buttonbutton);
    buttonbutton.addEventListener("click", addBook);

    function addBook() {

        add.disabled = false;
    
        if (inputread.checked === true) {
            inputread.value = "Read"
        } else {
            inputread.value = "Unread"
        }
    
        const book = new Book(inputname.value, inputauthor.value, inputpage.value, inputread.value);
        myLibrary.push(book);
    
        clearCards();
    
        for (const item in myLibrary) {
    
            const card = document.createElement("div");
            card.classList.add("card");
            card.classList.add("num" + [item]);
            main.appendChild(card);
        
        
            const title = document.createElement("p");
            title.classList.add("title");
            card.appendChild(title);
            title.textContent = myLibrary[item].title;
        
            const author = document.createElement("p");
            author.classList.add("author");
            card.appendChild(author);
            author.textContent = myLibrary[item].author;
        
            const pages = document.createElement("p");
            pages.classList.add("pages");
            card.appendChild(pages);    
            pages.textContent = myLibrary[item].pages + " pages";

            const buttons = document.createElement("div");
            buttons.classList.add("buttons");
            card.appendChild(buttons)
        
            const changeread = document.createElement("button");
            changeread.classList.add(myLibrary[item].read);
            buttons.appendChild(changeread);
            changeread.textContent = myLibrary[item].read;
            changeread.addEventListener("click", changeRead);

            function changeRead() {

                // Book.prototype = Object.create(createForm.prototype);
            
                if (myLibrary[item].read === "Read") {
                    myLibrary[item].read = "Unread"
                    changeread.classList.add("Unread");
                    changeread.classList.remove("Read");
                    changeread.textContent = myLibrary[item].read;
                } else if (myLibrary[item].read === "Unread") {
                    myLibrary[item].read = "Read"
                    changeread.classList.add("Read");
                    changeread.classList.remove("Unread");
                    changeread.textContent = myLibrary[item].read;
                };
            }

            const removebutton = document.createElement("button");
            removebutton.classList.add("removebutton");
            removebutton.classList.add("num" + [item]);
            buttons.appendChild(removebutton);
            removebutton.textContent = "X";
            removebutton.addEventListener("click", removeBook)

            function removeBook() {
                const rem = document.querySelector(".num" + [item])
                rem.remove();

                const test = [item];
                const test2 = Number(test);

                for (i = 0; i < myLibrary.length; i++) {
                    if (i === test2) {
                        myLibrary.splice(i, 1);
                        // i--;
                    }
                }
            }


    
            form.remove();
            main.classList.remove("darken");
            header.classList.remove("darken");
    }
    }
}



const body = document.querySelector("body");
const header = document.querySelector(".header");
const main = document.querySelector(".main");

const add = document.querySelector("#createform");
add.addEventListener("click", createForm);




let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// console.log(Book.prototype);
// Book.prototype = Object.create(createForm.prototype);
// console.log(Book.prototype);

// addBook.prototype = Object.create(createForm.prototype);

// needs validation
// needs to properly use the change read status button after removing an object from the array
// use fucking protoypal inheritance. 