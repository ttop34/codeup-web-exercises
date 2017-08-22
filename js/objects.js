(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */


var person = {
    first_names: "Elvin",
    last_name: "Terrell",
    say_hello:  function(){
        return "Hello from " + this.first_names + " " + this.last_name; + "!"
    },

    };

    console.log(person.say_hello());


    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {
            name: 'Ryan',
            amount: 250
        },
        {
            name: 'George',
            amount: 320
        }

    ];




    shoppers.forEach(function(shopper) {
        console.log(shopper.name + " owes $" + shopper.amount );
    });


// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];

    var books = [
        {
            number:1,
            title: "The Hitchhikers Guide to the Galaxy",
            author: {
                f_name: "Douglas",
                l_name: "Adams"
            }
        },
        {
            number:2,
            title: "The Mortal Instruments",
            author: {
                f_name: "Cassandra",
                l_name: "Clare"
            }
        },
        {
            number:3,
            title: "Stand and Deliver",
            author: {
                f_name: "Ramon",
                l_name: "Menendez"
            }
        },
        {
            number:4,
            title: "Interview with a Vampire",
            author: {
                f_name: "Anne",
                l_name: "Rice"
            }
        },
        {
            number:5,
            title: "The Phantom of the Opera",
            author: {
                f_name: "Gaston",
                l_name: "Leroux"
            }
        }
    ];

// log out the books array
//     console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
//     console.log("Book #" + todo);
//     console.log("Title: " + todo);
//     console.log("Author: " + todo);
//     console.log("---");
// end loop here

    books.forEach(function(book){
        console.log("Book #" + book.number);
        console.log("Title:" + book.title);
        console.log("Author:" + book.author.f_name + " " + book.author.l_name);
        console.log("--");

    })

})();

