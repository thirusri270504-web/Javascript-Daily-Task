// Get HTML elements

var addButton = document.getElementById("addButton");

var popupBackground = document.getElementById("popupBackground");

var closeButton = document.getElementById("closeButton");

var addBookButton = document.getElementById("addBookButton");

var bookContainer = document.getElementById("bookContainer");

var bookTitle = document.getElementById("bookTitle");

var bookAuthor = document.getElementById("bookAuthor");

var bookDescription = document.getElementById("bookDescription");


// Open popup

addButton.addEventListener("click", function() {

    popupBackground.style.display = "flex";

});


// Close popup

closeButton.addEventListener("click", function() {

    popupBackground.style.display = "none";

});


// Add book

addBookButton.addEventListener("click", function() {

    // Get the values entered by user

    var title = bookTitle.value;

    var author = bookAuthor.value;

    var description = bookDescription.value;


    // Check empty fields

    if (title == "" || author == "" || description == "") {

        alert("Please fill all the fields");

        return;

    }


    // Create book card

    var bookCard = document.createElement("div");

    bookCard.className = "book-card";


    // Add content to book card

    bookCard.innerHTML =

        "<h2>" + title + "</h2>" +

        "<h4>Author: " + author + "</h4>" +

        "<p>" + description + "</p>" +

        "<button class='delete-button'>Delete</button>";


    // Add book card to page

    bookContainer.appendChild(bookCard);


    // Find delete button

    var deleteButton = bookCard.querySelector(".delete-button");


    // Delete book

    deleteButton.addEventListener("click", function() {

        bookCard.remove();

    });


    // Clear input fields

    bookTitle.value = "";

    bookAuthor.value = "";

    bookDescription.value = "";


    // Close popup

    popupBackground.style.display = "none";

});